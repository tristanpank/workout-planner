import { getWorkouts } from "../firebase/db";
import { useState } from "react";

function DropDown({user}) {
  async function handleChange(e) {
    const type = e.target.value
    const workoutData = await getWorkouts(user, type);
    console.log(workoutData);
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
  return (
    <DropDown user={user} />
  )
}