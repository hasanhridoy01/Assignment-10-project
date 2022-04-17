// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpaTnWdH6d8IHfDDry3QSOyqpwbFnoE9Q",
  authDomain: "doctor-john-smith-personal.firebaseapp.com",
  projectId: "doctor-john-smith-personal",
  storageBucket: "doctor-john-smith-personal.appspot.com",
  messagingSenderId: "576441862177",
  appId: "1:576441862177:web:dd99a34beb1c375115fb60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;