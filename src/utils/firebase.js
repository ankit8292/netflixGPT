// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsqmlQRvmMWaOO3lomtuhRsLFaAhRXCRA",
  authDomain: "netflixgpt-22719.firebaseapp.com",
  projectId: "netflixgpt-22719",
  storageBucket: "netflixgpt-22719.appspot.com",
  messagingSenderId: "950479519602",
  appId: "1:950479519602:web:2e6ffa8466d3cb9b1627eb",
  measurementId: "G-3QR2466YZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();