import { useState } from 'react';
import { signIn, signOutUser } from "./firebase/auth";


function App() {
  const [currUser, setCurrUser] = useState({displayName: ""});
  

  return(
    <div>
      <button onClick={() => signIn(setCurrUser)}>Sign In</button>
      <button onClick={() => signOutUser(setCurrUser)}>Sign Out</button>
      <div>{currUser.displayName}</div>
    </div>
  )
}

export default App;
