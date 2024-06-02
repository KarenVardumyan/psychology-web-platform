import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  development: {
    apiKey: "AIzaSyCqSMiet2x2vN1XteZT5nF-8du6YX1hpFA",
    authDomain: "psychology-web-platform.firebaseapp.com",
    projectId: "psychology-web-platform",
    storageBucket: "psychology-web-platform.appspot.com",
    messagingSenderId: "679010793595",
    appId: "1:679010793595:web:b08d1b4ae48e39aec24ade",
    measurementId: "G-6R3YFKB0C9"
  }
};

// Initialize Firebase
const config = firebaseConfig["development"];
initializeApp(config);

export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore(); // initializing firestore into db variable
export const authDomain = config.authDomain;
export const projectId = config.projectId;
export const database = getDatabase();
