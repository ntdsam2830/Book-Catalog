// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf38tXTwVYuourlcDQrrUeSlavLwFQWug",
  authDomain: "myecom-2d8ab.firebaseapp.com",
  projectId: "myecom-2d8ab",
  storageBucket: "myecom-2d8ab.appspot.com",
  messagingSenderId: "808625641649",
  appId: "1:808625641649:web:1526430a32afd06da56a90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };
