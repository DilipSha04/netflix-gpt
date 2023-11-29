// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClPTHNLOqAcwUVhtVsLAn0IHmN7LxKUsI",
  authDomain: "mynetflixgpt-9e3c3.firebaseapp.com",
  projectId: "mynetflixgpt-9e3c3",
  storageBucket: "mynetflixgpt-9e3c3.appspot.com",
  messagingSenderId: "984916996118",
  appId: "1:984916996118:web:51080d3c748dce08dc4537",
  measurementId: "G-NY8BBXZ8D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();