// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0MzTeOzCU7IUhKiSjL6h2Nq-zXacX-Kw",
  authDomain: "netflixgpt-3e57a.firebaseapp.com",
  projectId: "netflixgpt-3e57a",
  storageBucket: "netflixgpt-3e57a.firebasestorage.app",
  messagingSenderId: "643869616661",
  appId: "1:643869616661:web:e0f58dd9fcc513da5efc1c",
  measurementId: "G-9S9639FL18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);