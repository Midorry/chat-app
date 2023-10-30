import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKyik4dEUSH9OXw8Z5zAp-7OAPDSsxagY",
    authDomain: "chat-709bf.firebaseapp.com",
    projectId: "chat-709bf",
    storageBucket: "chat-709bf.appspot.com",
    messagingSenderId: "646385502",
    appId: "1:646385502:web:04b12746fec6286f3049cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
