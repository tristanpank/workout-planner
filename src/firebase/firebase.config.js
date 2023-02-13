// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3mZyc3sGG87z0kL9YR3r2BE1XCWfBSBg",
  authDomain: "workout-planner-484d6.firebaseapp.com",
  projectId: "workout-planner-484d6",
  storageBucket: "workout-planner-484d6.appspot.com",
  messagingSenderId: "1021723798008",
  appId: "1:1021723798008:web:c0bf864dfc8a2f4f75ce0d",
  measurementId: "G-KNWRTRJ67X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);