import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFpRMt6riT7VP0G3eYikFVt-n3AzCOpqw",
  authDomain: "whatsapp-clone-chatapp-cea6f.firebaseapp.com",
  projectId: "whatsapp-clone-chatapp-cea6f",
  storageBucket: "whatsapp-clone-chatapp-cea6f.firebasestorage.app",
  messagingSenderId: "328431539927",
  appId: "1:328431539927:web:21c06355f2f407d9868292",
  measurementId: "G-1S4KYKGHT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);  
