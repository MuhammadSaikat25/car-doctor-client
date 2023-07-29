// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5NKOOxb1U_Ut3QN8xKM8ulS2wigaRm4",
  authDomain: "car-doctor-61feb.firebaseapp.com",
  projectId: "car-doctor-61feb",
  storageBucket: "car-doctor-61feb.appspot.com",
  messagingSenderId: "17883448575",
  appId: "1:17883448575:web:56da16c1704ee4a79378ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app