// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJJIBJ2PLPoN58PWm0NPjNITUfU3ddDDg",
  authDomain: "stock-entry-management.firebaseapp.com",
  projectId: "stock-entry-management",
  storageBucket: "stock-entry-management.appspot.com",
  messagingSenderId: "207459914955",
  appId: "1:207459914955:web:c30b4277a96917a82af74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
