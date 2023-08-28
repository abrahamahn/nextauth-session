// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHYXh_3WWYgRNGOjTFdAJkeFzMPsXGCS0",
  authDomain: "stadiumskills-e729b.firebaseapp.com",
  projectId: "stadiumskills-e729b",
  storageBucket: "stadiumskills-e729b.appspot.com",
  messagingSenderId: "238358852437",
  appId: "1:238358852437:web:73084f3d1c74258360f5dc",
  measurementId: "G-91WPZKLFZ3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export { app }