import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2EX6Il6SSnhUqn3zaBlmwVbUULQJaTxs",
  authDomain: "rethink-academy-certificates.firebaseapp.com",
  projectId: "rethink-academy-certificates",
  storageBucket: "rethink-academy-certificates.appspot.com",
  messagingSenderId: "553763807295",
  appId: "1:553763807295:web:64074920e4bcf537fad88a",
  measurementId: "G-J1S4PK0MBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };
