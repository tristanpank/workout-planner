import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase/app";

// firebase.initializeApp({
//   apiKey: "AIzaSyB3mZyc3sGG87z0kL9YR3r2BE1XCWfBSBg",
//   authDomain: "workout-planner-484d6.firebaseapp.com",
//   projectId: "workout-planner-484d6",
//   storageBucket: "workout-planner-484d6.appspot.com",
//   messagingSenderId: "1021723798008",
//   appId: "1:1021723798008:web:c0bf864dfc8a2f4f75ce0d",
//   measurementId: "G-KNWRTRJ67X"
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
