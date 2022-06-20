// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI6o0opiXQOvdbwdycxzxBdQrR__Yy3sU",
  authDomain: "databaseecommerce-fb62a.firebaseapp.com",
  projectId: "databaseecommerce-fb62a",
  storageBucket: "databaseecommerce-fb62a.appspot.com",
  messagingSenderId: "543714482001",
  appId: "1:543714482001:web:0fe0a839a6ad72897d2570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)