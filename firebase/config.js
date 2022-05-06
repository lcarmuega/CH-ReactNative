// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7bQpBoRYHTwd7Wl-5iUYrAM-eUzq27Vg",
  authDomain: "ecommerce-coder-react-c3241.firebaseapp.com",
  projectId: "ecommerce-coder-react-c3241",
  storageBucket: "ecommerce-coder-react-c3241.appspot.com",
  messagingSenderId: "702545335111",
  appId: "1:702545335111:web:0e8d296982fd202549b262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);