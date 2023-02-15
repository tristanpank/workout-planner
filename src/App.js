import { useState } from 'react';
import Login from './components/login';
import Workouts from './components/Workouts';
import { setDay } from './firebase/db';
import { signOutUser } from './firebase/auth';


const testDay = {
  date: "2023-02-13",
  workouts: {
    time: 20,
    distance: 10,
    duration: 15,
    type: "tempo",
    tags: "recovery"
  }
}

function App() {
  const [currUser, setCurrUser] = useState(null);
  async function handleClick() {
    let test = await setDay(currUser, testDay);
    console.log(test);
  }

  if (currUser === null) {
    return (
      <Login setCurrUser={setCurrUser} />
    )
  }

  return(
    <div>
      <div>{currUser.displayName}</div>
      <button onClick={handleClick}>Add Day</button>
      <button onClick={signOutUser}>Sign Out</button>
      <Workouts user={currUser} />
    </div>
  )
}

export default App;
