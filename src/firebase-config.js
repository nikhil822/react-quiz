import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "react-quiz-69bcb.firebaseapp.com",
    projectId: "react-quiz-69bcb",
    storageBucket: "react-quiz-69bcb.appspot.com",
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MID
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);