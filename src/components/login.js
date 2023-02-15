import { signIn, signOutUser } from "../firebase/auth";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export default function Login({setCurrUser}) {
  onAuthStateChanged(auth, (user) => {
    setCurrUser(user);
  })
  
  return (
    <div className="bg-custom-white h-screen flex justify-center items-center">
    <div className="bg-custom-orange-light flex justify-center items-center flex-col
    h-1/3 w-1/3 rounded-3xl gap-4">
      <div className="text-white text-3xl font-bold text-center">Welcome to Workout Planner</div>
      <button onClick={signIn} className="bg-custom-white w-1/3 h-1/6 rounded-md text-lg font-semibold
      hover:bg-custom-gray">Sign In</button>
      {/* <button onClick={signOutUser} className="bg-custom-white w-1/3 h-1/6 rounded-md text-lg font-semibold
      hover:bg-custom-gray">Sign Out</button> */}
    </div>
    </div>
  )
}
