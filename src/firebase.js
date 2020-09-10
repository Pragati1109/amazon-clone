import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBR34MxudnsAXOqmnCA4QwEuWVcExn8yHY",
  authDomain: "clone-6e89c.firebaseapp.com",
  databaseURL: "https://clone-6e89c.firebaseio.com",
  projectId: "clone-6e89c",
  storageBucket: "clone-6e89c.appspot.com",
  messagingSenderId: "19568332696",
  appId: "1:19568332696:web:b935c76107a11f894025ed",
  measurementId: "G-MELL0FT1WK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
