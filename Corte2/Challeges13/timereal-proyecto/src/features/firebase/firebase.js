import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp,
  onValue
} from 'firebase/database';

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

  export const auth = getAuth(app);
  export const database = getDatabase(app);
  export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    ref,
    push,
    set,
    serverTimestamp,
    onValue
  };