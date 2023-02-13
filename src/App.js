import { useState } from 'react';
import Login from './components/login';


function App() {
  const [currUser, setCurrUser] = useState(null);

  return(
    <div>
      <Login setCurrUser={setCurrUser} />
      <div>{(currUser==null) ? "no user" : currUser.displayName}</div>
    </div>
  )
}

export default App;
