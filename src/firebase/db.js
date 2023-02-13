import { db } from "./firebase.config";
import { doc, setDoc} from "firebase/firestore";


// Sets user variables whenever a user is logged in
export async function setUserDB(user) {
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    email: user.email,
  })
}
