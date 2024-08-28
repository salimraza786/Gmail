/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4054P7k7MU8icukceOOPulvQJAwELRn8",
  authDomain: "clone-srk.firebaseapp.com",
  projectId: "clone-srk",
  storageBucket: "clone-srk.appspot.com",
  messagingSenderId: "151815310463",
  appId: "1:151815310463:web:52df9857b8e15d956ac34a",
  measurementId: "G-6TJC5C90FB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()