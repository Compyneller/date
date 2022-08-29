import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvDJvWy-ClxqnBixiF4l0R0h-rdbGSHR0",
  authDomain: "date-ad6e1.firebaseapp.com",
  projectId: "date-ad6e1",
  storageBucket: "date-ad6e1.appspot.com",
  messagingSenderId: "161393504833",
  appId: "1:161393504833:web:66189cf2b751613cb2ccc0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
