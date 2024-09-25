// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGw-6Wc9lRKg4sV9R2iNDGsS0WAOD4zys",
  authDomain: "todolist-webapp-5e708.firebaseapp.com",
  projectId: "todolist-webapp-5e708",
  storageBucket: "todolist-webapp-5e708.appspot.com",
  messagingSenderId: "863599051590",
  appId: "1:863599051590:web:f6d8a22d27930c66939b47",
  measurementId: "G-T3D8RSMBFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);