import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  OAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpiVKEjJm0EtcLEiVGFvgkHGpJRovk9MM",
  authDomain: "blissful-shore-381307.firebaseapp.com",
  projectId: "blissful-shore-381307",
  storageBucket: "blissful-shore-381307.appspot.com",
  messagingSenderId: "777947144894",
  appId: "1:777947144894:web:4e8c9f320d90a43f70b4ef",
  measurementId: "G-CZD3Y34PHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const msProvider = new OAuthProvider("microsoft.com");
const fireBaseLogout = () => signOut(auth);
export { auth, googleProvider, msProvider, fireBaseLogout };
