// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cinema-e499b.firebaseapp.com",
  projectId: "cinema-e499b",
  storageBucket: "cinema-e499b.appspot.com",
  messagingSenderId: "1041851471167",
  appId: "1:1041851471167:web:3ff01758266aaf856eef8a",
  measurementId: "G-RYYKXDFTNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
