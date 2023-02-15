import { db } from "./firebase.config";
import { doc, setDoc, getDoc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";


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

// Adds/sets a day document to a given user
export async function setDay(user, day) {
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
  
  // if format/num of attributes is correct
  // Adds the day to the db
  await setDoc(doc(db, "users", user.uid, "days", day.date), {
    date: day.date,
    workouts: day.workouts,
  })
  return true;
}

// Adds a workout JSON to the workout array in firestore
export async function addWorkout(user, workout) {
  const type = workout.type;
  if (type !== "run" || type !== "bike" || type !== "swim") {
    return false;
  }
  await updateDoc(doc(db, "users", user.uid, "workouts", type), {
    workouts: arrayUnion(workout),
  });
  return true;
}

// Removes a given workout JSON from the workout array in firestore
export async function removeWorkout(user, workout) {
  const type = workout.type;
  if (type !== "run" || type !== "bike" || type !== "swim") {
    return false;
  }
  await updateDoc(doc(db, "users", user.uid, "workouts", type), {
    workouts: arrayRemove(workout),
  });
  return true;
}