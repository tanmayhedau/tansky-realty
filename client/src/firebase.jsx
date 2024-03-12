// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tansky-realty.firebaseapp.com",
  projectId: "tansky-realty",
  storageBucket: "tansky-realty.appspot.com",
  messagingSenderId: "901115554033",
  appId: "1:901115554033:web:5d12cac55d7bd7da9ce150",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
