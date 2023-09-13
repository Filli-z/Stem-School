// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgRMI8nyCnW-GIvEMQ9oEmJ4JPSt_zwT4",
  authDomain: "cargooking.firebaseapp.com",
  databaseURL: "https://cargooking-default-rtdb.firebaseio.com",
  projectId: "cargooking",
  storageBucket: "cargooking.appspot.com",
  messagingSenderId: "583040452183",
  appId: "1:583040452183:web:fa608efe45ac07641a8512",
  measurementId: "G-P24JY9G3DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db