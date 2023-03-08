import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDQXwsk1ywqtm75dtcf6uAi1pJaXAyBeKw",
  authDomain: "vue3-pinia-firebase-cb3a2.firebaseapp.com",
  projectId: "vue3-pinia-firebase-cb3a2",
  storageBucket: "vue3-pinia-firebase-cb3a2.appspot.com",
  messagingSenderId: "818735282632",
  appId: "1:818735282632:web:8111ea04c6b3dfeef328fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };