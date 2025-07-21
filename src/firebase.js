// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7HHE-uVNSRSlZI8I68I3_bdG9L61pD_k",
  authDomain: "the-mindspace-centre.firebaseapp.com",
  projectId: "the-mindspace-centre",
  storageBucket: "the-mindspace-centre.firebasestorage.app",
  messagingSenderId: "789229180836",
  appId: "1:789229180836:web:8e78c91b810d4a90925331",
  measurementId: "G-HH4XV1R0B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

// const analytics = getAnalytics(app);