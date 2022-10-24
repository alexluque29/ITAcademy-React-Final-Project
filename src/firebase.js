import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKDchfCyfHWYCJbtWm_caAv5YipOf8n8M",
  authDomain: "rproject-f8ca9.firebaseapp.com",
  projectId: "rproject-f8ca9",
  storageBucket: "rproject-f8ca9.appspot.com",
  messagingSenderId: "693461482663",
  appId: "1:693461482663:web:68c6801a5869d79ca76f82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);