
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEs8vtEUslNvEtxa6SbIfEJT8q5qylFvU",
  authDomain: "netflix-clone-82c93.firebaseapp.com",
  projectId: "netflix-clone-82c93",
  storageBucket: "netflix-clone-82c93.appspot.com",
  messagingSenderId: "800156473580",
  appId: "1:800156473580:web:974d6a5a3695f38d1a2dc9",
  measurementId: "G-ENT4WVF77D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }