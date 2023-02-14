import { db } from "./firebase.config";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";


// Sets user variables whenever a user is logged in
export async function setUserDB(user) {
  const userRef = await getDoc(doc(db, "users", user.uid));
  if (userRef.exists()) {
    console.log("exists");
  } else {
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
    });
    let today = new Date().toISOString().slice(0, 10)
    await setDoc(doc(db, "users", user.uid, "days", today), {
      date: today,
      workouts: {},
    });
    await setDoc(doc(db, "users", user.uid, "workouts", "run"), {
      workouts: [],
    });
    await setDoc(doc(db, "users", user.uid, "workouts", "bike"), {
      workouts: [],
    });
    await setDoc(doc(db, "users", user.uid, "workouts", "swim"), {
      workouts: [],
    });
    
  }
  // await setDoc(doc(db, "users", user.uid), {
  //   name: user.displayName,
  //   email: user.email,
  // })
  // await setDoc(doc(db, "users", user.uid, "days", "day"), {
  //   day: "testday"
  // });
};


export async function addDay(user, day) {
  // Checks if workout properites are defined
  // Also if length is correct
  if (day.date === undefined || day.workouts === undefined) {
    return false;
  }
  if (Object.keys(day).length !== 2) {
    return false;
  }
  const workouts = day.workouts;
  if (workouts.time === undefined || workouts.type === undefined || workouts.duration === undefined || workouts.distance === undefined || workouts.tags === undefined) {
    console.log("test");
    return false;
  }
  if (Object.keys(workouts).length !== 5) {
    return false;
  }
  await setDoc(doc(db, "users", user.uid, "days", day.date), {
    date: day.date,
    workouts: day.workouts,
  })
  return true;
}