import { signIn, signOutUser } from "../firebase/auth";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export default function Login({setCurrUser}) {
  onAuthStateChanged(auth, (user) => {
    setCurrUser(user);
  })
  
  return (
    <>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOutUser}>Sign Out</button>
    </>
  )
}