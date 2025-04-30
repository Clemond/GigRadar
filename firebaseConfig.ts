import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAQxNmrDnkPKm2uX_hgtNY2KtWe6pNHS6U",
  authDomain: "gigradar-46f6d.firebaseapp.com",
  projectId: "gigradar-46f6d",
  storageBucket: "gigradar-46f6d.firebasestorage.app",
  messagingSenderId: "967017042592",
  appId: "1:967017042592:web:20e9159f576c8adce2afc5"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
