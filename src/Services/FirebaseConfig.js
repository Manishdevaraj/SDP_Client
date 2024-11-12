
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBOAG63zC0MwfJ-WcGocGRHR5M_oQfA5n0",
  authDomain: "volhub-bc476.firebaseapp.com",
  projectId: "volhub-bc476",
  storageBucket: "volhub-bc476.appspot.com",
  messagingSenderId: "920889385261",
  appId: "1:920889385261:web:cad8814e661e35926373a4",
  measurementId: "G-8MGYX39SFC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const storage = getStorage();
