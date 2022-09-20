
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMz4GKr-bL87rCye0zWpOtnIwBneks1MY",
    authDomain: "netflix-clone-e0d59.firebaseapp.com",
    projectId: "netflix-clone-e0d59",
    storageBucket: "netflix-clone-e0d59.appspot.com",
    messagingSenderId: "217434001430",
    appId: "1:217434001430:web:5bd942459146b1b299e537"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }