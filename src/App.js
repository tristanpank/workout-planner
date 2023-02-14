import { useState } from 'react';
import Login from './components/login';
import { addDay } from './firebase/db';


const testDay = {
  date: "2023-02-13",
  workouts: {
    time: 20,
    distance: 10,
    duration: 25,
    type: "recovery",
    tags: "recovery"
  }
}

function App() {
  const [currUser, setCurrUser] = useState(null);
  async function handleClick() {
    let test = await addDay(currUser, testDay);
    console.log(test);
  }
  return(
    <div>
      <Login setCurrUser={setCurrUser} />
      <div>{(currUser==null) ? "no user" : currUser.displayName}</div>
      <button onClick={handleClick}>Add Day</button>
    </div>
  )
}

export default App;
