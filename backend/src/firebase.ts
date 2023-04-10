// Import necessary firebase modules from firebase library and dotenv module for environment variables.
import { FirebaseApp, initializeApp } from "firebase/app";
import dotenv from "dotenv";
import { getFirestore, Firestore } from "firebase/firestore/lite";

// Load environment variables from .env file
dotenv.config();

// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize a new Firebase App instance with the given configuration object
const app: FirebaseApp = initializeApp(firebaseConfig);

// Get a Firestore instance using the initialized app
export const database: Firestore = getFirestore(app);
