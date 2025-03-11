// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPf3O5jsmNn8rr-c2o2RV3gnHk0HBq_g",
  authDomain: "firereact-95c81.firebaseapp.com",
  projectId: "firereact-95c81",
  storageBucket: "firereact-95c81.firebasestorage.app",
  messagingSenderId: "1046932220940",
  appId: "1:1046932220940:web:82029aa0b106ff5b8f1229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
export default app;