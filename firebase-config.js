// --- Firebase Setup for House of Science ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUZQOrUksAU7BaMkGOER4GwgzIe8Rnd_8",
  authDomain: "houseofscienceweb.firebaseapp.com",
  projectId: "houseofscienceweb",
  storageBucket: "houseofscienceweb.appspot.com", // ✅ corrected
  messagingSenderId: "601260057411",
  appId: "1:601260057411:web:97c90b7bf2bc5e480e85f6",
  measurementId: "G-LFJK181XYE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
