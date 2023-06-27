import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhBe1zufztUQzlf-8J9FJE_VONxPaxsok",
  authDomain: "notesproject-d8872.firebaseapp.com",
  projectId: "notesproject-d8872",
  storageBucket: "notesproject-d8872.appspot.com",
  messagingSenderId: "654532510257",
  appId: "1:654532510257:web:2fc2d425351d94d8fa0b10"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")