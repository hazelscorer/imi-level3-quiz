// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDARbo878Jjt_NVYXZ2PAkhkLMfRIsotqg",
  authDomain: "imi-quiz-tracker.firebaseapp.com",
  databaseURL: "https://imi-quiz-tracker-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "imi-quiz-tracker",
  storageBucket: "imi-quiz-tracker.firebasestorage.app",
  messagingSenderId: "593186317136",
  appId: "1:593186317136:web:111cfbcf3284100cfc8255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
