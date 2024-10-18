// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-73fNwXBeMuQfgnmCU88azAGUW15DJ4A",
  authDomain: "redux-crud-4a4a6.firebaseapp.com",
  projectId: "redux-crud-4a4a6",
  storageBucket: "redux-crud-4a4a6.appspot.com",
  messagingSenderId: "1008922941557",
  appId: "1:1008922941557:web:efa796b15bb74248b7003c",
  databaseURL:"https://redux-crud-4a4a6-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;