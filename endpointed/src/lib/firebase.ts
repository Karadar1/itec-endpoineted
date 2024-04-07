// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpkXdqa2QNnJOLoCrXC2hW5tzVa5ZV38Q",
  authDomain: "itec-endpointed.firebaseapp.com",
  projectId: "itec-endpointed",
  storageBucket: "itec-endpointed.appspot.com",
  messagingSenderId: "1082308206408",
  appId: "1:1082308206408:web:b9d99a9f130f6fd5041d7d",
  measurementId: "G-CX28CNPPE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

//colections refs
const appsRef = collection(db, "apps");

const firebaseComp = {
  app,
  auth,
  db,
  appsRef,
};

export default firebaseComp;
