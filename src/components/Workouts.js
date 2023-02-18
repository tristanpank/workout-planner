import { getWorkouts } from "../firebase/db";
import { useState } from "react";
import WorkoutList from "./WorkoutList";

function DropDown({user, currWorkouts, setCurrWorkouts, setType}) {
  
  async function handleChange(e) {
    const type = e.target.value
    setType(type);
    const workoutData = await getWorkouts(user, type);
    const workoutArr = workoutData.workouts;
    // setCurrWorkouts((currWorkouts) => ({
    //   ...currWorkouts,
    //   [type]: workoutArr,
    // }))
    
    setCurrWorkouts({
      ...currWorkouts,
      [type]: workoutArr,
    })
  }
  
  
  return (
    <div>
      <select name="type" onChange={handleChange}>
        <option value="swim">Swim</option>
        <option value="bike">Bike</option>
        <option value="run">Run</option>
      </select>
    </div>
  )
}


export default function Workouts({user}) {
  const [currWorkouts, setCurrWorkouts] = useState({
    "swim": [],
    "bike": [],
    "run": [],
  });
  const [type, setType] = useState("swim");
  const selectedData = currWorkouts[type].map(workout => {
    return (
      <ul>
        <ul>{workout.duration}</ul>
        <ul>{workout.type}</ul>
      </ul>
    )
  })
  return (
    <div>
      <DropDown user={user} currWorkouts={currWorkouts} setCurrWorkouts={setCurrWorkouts} setType={setType} />
      <ul>
        <WorkoutList data={currWorkouts[type]} />
      </ul>
    </div>
  )
}