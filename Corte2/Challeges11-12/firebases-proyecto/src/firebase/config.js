// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3lopZqRzrQvoFcOzI-N4oTCL0ED-gWHw",
  authDomain: "proyecto1-766ec.firebaseapp.com",
  databaseURL: "https://proyecto1-766ec-default-rtdb.firebaseio.com",
  projectId: "proyecto1-766ec",
  storageBucket: "proyecto1-766ec.firebasestorage.app",
  messagingSenderId: "128913420909",
  appId: "1:128913420909:web:6b4a79e0e741f7d6594564",
  measurementId: "G-Q5GGXKSXS8"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);