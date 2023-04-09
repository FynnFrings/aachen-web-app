import { FirebaseApp, initializeApp } from "firebase/app";
import dotenv from "dotenv";
import { getFirestore, Firestore } from "firebase/firestore/lite";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const database: Firestore = getFirestore(app);
