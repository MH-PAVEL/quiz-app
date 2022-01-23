// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.React_apiKey,
    authDomain: process.env.React_authDomain,
    projectId: process.env.React_projectId,
    storageBucket: process.env.React_storageBucket,
    messagingSenderId: process.env.React_messagingSenderId,
    appId: process.env.React_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;