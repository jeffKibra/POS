// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKNxSS9IuyNSO6_8jN2XB0WbSMIMffWck",
  authDomain: "posimplified.firebaseapp.com",
  projectId: "posimplified",
  storageBucket: "posimplified.appspot.com",
  messagingSenderId: "549075418681",
  appId: "1:549075418681:web:c0464a2c964ca497fc57e8",
  measurementId: "G-ZDFJQNYDYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
