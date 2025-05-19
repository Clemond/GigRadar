// This is a firebase config reference file
// It should not be committed to the repository with real credentials.
// When setting up the project, please create your own firebaseConfig.ts
// by copying this file and adding your Firebase project details.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

// OBS: DO NOT COMMIT THIS FILE WITH YOUR REAL API KEY!
// Copy this to a new file called `firebaseConfig.ts` and
// replace the placeholders with your actual Firebase credentials.
// Make sure that `firebaseConfig.ts` is included in your .gitignore to avoid
// uploading sensitive information to version control.
