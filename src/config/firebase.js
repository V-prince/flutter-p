import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZXyJJp26GI9e-DcjbNSkP_eCmCbvjY34", authDomain: "pratik-portfolio-5ff98.firebaseapp.com", projectId: "pratik-portfolio-5ff98",
  storageBucket: "pratik-portfolio-5ff98.firebasestorage.app",
  messagingSenderId: "322008609038",
  appId: "1:322008609038:web:e5c7440017f0f9a10e675f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);