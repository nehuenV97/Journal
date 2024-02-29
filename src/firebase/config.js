// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7HJdgR3b-1UAwd6fx-3eskF8eyclAAnw",
  authDomain: "journal-app-6cbb2.firebaseapp.com",
  projectId: "journal-app-6cbb2",
  storageBucket: "journal-app-6cbb2.appspot.com",
  messagingSenderId: "943670167474",
  appId: "1:943670167474:web:e64e0d18d500f9b00146ab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );