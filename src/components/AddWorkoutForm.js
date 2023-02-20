import { useState } from "react";
import { addWorkout, getWorkouts } from "../firebase/db";

export default function AddWorkoutForm({user, type, setCurrWorkouts, currWorkouts, setAddWorkoutVis}) {
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
    });
    setAddWorkoutVis(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setAddWorkoutVis(false);
  }
  
  return (
    <form onSubmit={handleSubmit} className="absolute bg-custom-orange-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    w-1/2 h-1/2 rounded-3xl flex flex-col justify-center items-center">
      <div>Add {type}</div>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={handleChange}></input>
      <label htmlFor="distance">Distance</label>
      <input id="distance" type="number" onChange={handleChange}></input>
      <label htmlFor="time">Time</label>
      <input id="time" type="number" onChange={handleChange}></input>
      <button type="submit" className="bg-custom-white text-black w-1/5 h-10 mt-5 rounded-md">Submit</button>
      <button onClick={handleCancel} className="bg-custom-white text-black w-1/5 h-10 mt-5 rounded-md">Cancel</button>
    </form>
  )
}