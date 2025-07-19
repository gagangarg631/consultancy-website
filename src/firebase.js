// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4V6Mk6UUaCifY090iK6glMKNYkO4cbI",
  authDomain: "consultancy-website-a7525.firebaseapp.com",
  projectId: "consultancy-website-a7525",
  storageBucket: "consultancy-website-a7525.firebasestorage.app",
  messagingSenderId: "476586920962",
  appId: "1:476586920962:web:aeb9773aa9b28518e1ab1b",
  measurementId: "G-RZNFTW4XMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

// const analytics = getAnalytics(app);