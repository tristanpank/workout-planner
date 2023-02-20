import { useState } from "react";
import { addWorkout, getWorkouts } from "../firebase/db";

export default function AddWorkoutForm({user, type, setCurrWorkouts, currWorkouts}) {
  const [formData, setFormData] = useState({type: type});
  
  function handleChange(e) {
    const data = e.target.value;
    const key = e.target.id;
    setFormData({
      ...formData,
      [key]: data,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(type);
    formData.type = type;
    console.log(formData);
    let status = await addWorkout(user, formData);
    console.log(status);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={handleChange}></input>
      <label htmlFor="distance">Distance</label>
      <input id="distance" type="number" onChange={handleChange}></input>
      <label htmlFor="time">Time</label>
      <input id="time" type="number" onChange={handleChange}></input>
      <button type="submit">Submit</button>
    </form>
  )
}