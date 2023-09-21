// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBcamFxBPiPef9ERDHEZm3LoOXqlfb8_YA",
  authDomain: "hng-task-fdfe3.firebaseapp.com",
  projectId: "hng-task-fdfe3",
  storageBucket: "hng-task-fdfe3.appspot.com",
  messagingSenderId: "868214551526",
  appId: "1:868214551526:web:85cd15cab03e2201e35c27",
  measurementId: "G-2N3YS63G9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}