import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { Platform } from 'react-native';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDq1kpquwpEkIMzEPr5o0aPv0eBiJbKWo0",
  authDomain: "haven-94524.firebaseapp.com",
  projectId: "haven-94524",
  storageBucket: "haven-94524.firebasestorage.app",
  messagingSenderId: "573667577968",
  appId: "1:573667577968:web:55b7a46d5f80b251eba4b5",
  measurementId: "G-979DDD728B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Use correct auth initialization based on platform
let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app); // Use standard web auth
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };

export const db = getFirestore(app);
export const storage = getStorage(app);
export const usersRef = collection(db, 'users');
