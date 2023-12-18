// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "listing-app-2fcde.firebaseapp.com",
  projectId: "listing-app-2fcde",
  storageBucket: "listing-app-2fcde.appspot.com",
  messagingSenderId: "429729455219",
  appId: "1:429729455219:web:fba81110f641cda18e5e06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
