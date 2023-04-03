// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0G_m1Cunfe1WGgZou4CMQtJH6il6WxUk",
  authDomain: "react-disney-9bc6c.firebaseapp.com",
  projectId: "react-disney-9bc6c",
  storageBucket: "react-disney-9bc6c.appspot.com",
  messagingSenderId: "1044007980307",
  appId: "1:1044007980307:web:142bc4451e3d5aa0909ee6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
