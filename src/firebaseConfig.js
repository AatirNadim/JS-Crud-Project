// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNWsHwjuzdH40h7CgvfDnmfNgV0M7jMLI",
  authDomain: "js-crud-project.firebaseapp.com",
  projectId: "js-crud-project",
  storageBucket: "js-crud-project.appspot.com",
  messagingSenderId: "802850637568",
  appId: "1:802850637568:web:798f6cb51ad211f62295e5",
  measurementId: "G-M7PZC1E3C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);