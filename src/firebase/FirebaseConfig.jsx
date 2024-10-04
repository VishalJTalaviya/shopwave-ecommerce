// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdSIE6NhqTm46YSVb4fQXg0LShs5-jYg",
  authDomain: "myecom-9a287.firebaseapp.com",
  projectId: "myecom-9a287",
  storageBucket: "myecom-9a287.appspot.com",
  messagingSenderId: "927928418126",
  appId: "1:927928418126:web:d36446cf707d315f7f281f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };