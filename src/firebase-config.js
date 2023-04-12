import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaLZ72-a9i5drmHxAxldGmBJCxAbK1Zdw",
    authDomain: "react-quiz-69bcb.firebaseapp.com",
    projectId: "react-quiz-69bcb",
    storageBucket: "react-quiz-69bcb.appspot.com",
    messagingSenderId: "405133986278",
    appId: "1:405133986278:web:8798914e8986c4b9ab6e27",
    measurementId: "G-S07565H5YG"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);