import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCCsl0CmPhpoB9v8tT_r9s8cPZVR3E1FPM",
  authDomain: "m-city-685ee.firebaseapp.com",
  databaseURL: "https://m-city-685ee.firebaseio.com",
  projectId: "m-city-685ee",
  storageBucket: "m-city-685ee.appspot.com",
  messagingSenderId: "1087077681090"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
