// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSUm7ro7-SRJyNkhmqwVMvWADQgTm40do",
  authDomain: "barikibarikiwa.firebaseapp.com",
  projectId: "barikibarikiwa",
  storageBucket: "barikibarikiwa.appspot.com",
  messagingSenderId: "163608423571",
  appId: "1:163608423571:web:e9239ede979ddd98fcb166",
  measurementId: "G-CSV3KZS2SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
