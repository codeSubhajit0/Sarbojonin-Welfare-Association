import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * Client-side Firebase SDK — safe to import from any "use client" component.
 * Values come from NEXT_PUBLIC_* env vars, which Next.js inlines into the
 * browser bundle at build time (these are not secrets — Firebase's client
 * config is meant to be public; access control is enforced by Firestore /
 * Storage security rules and Firebase Auth, not by hiding this config).
 */
const requiredEnv = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


export const firebaseConfigError =
    Object.values(requiredEnv).every(Boolean)
        ? null
        : "Firebase client configuration is missing. Add NEXT_PUBLIC_FIREBASE_* variables.";

const firebaseConfig: FirebaseOptions = {
    apiKey: requiredEnv.apiKey || "AIzaSyD21gB_qU8HNUz48dA1I6jGtAZLsc3PE4o" || "AIzaSyBuildPlaceholder000000000000000000",
    authDomain: requiredEnv.authDomain || "build-placeholder.firebaseapp.com",
    projectId: requiredEnv.projectId || "build-placeholder",
    storageBucket: requiredEnv.storageBucket || "build-placeholder.appspot.com",
    messagingSenderId: requiredEnv.messagingSenderId || "000000000000",
    appId: requiredEnv.appId || "1:000000000000:web:0000000000000000000000",
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export default firebaseApp;
