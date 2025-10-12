// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZMnf0OPBxlD6rduc6lOJIwqkCBHxT7yw",
  authDomain: "modual-42467.firebaseapp.com",
  databaseURL: "https://modual-42467-default-rtdb.firebaseio.com",
  projectId: "modual-42467",
  storageBucket: "modual-42467.firebasestorage.app",
  messagingSenderId: "295191363365",
  appId: "1:295191363365:web:65c5e06a13ab6bb216a4cc",
  measurementId: "G-KTHWHH8MW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getDatabase(app);