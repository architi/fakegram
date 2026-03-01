import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCSpnvh0kY2ckmilRENg3g8L-9cGzCJ4g",
  authDomain: "fakegram-611c2.firebaseapp.com",
  projectId: "fakegram-611c2",
  storageBucket: "fakegram-611c2.firebasestorage.app",
  messagingSenderId: "334670285116",
  appId: "1:334670285116:web:6fad4fc7f348f38cde3639",
  measurementId: "G-DBCQY2KWCS",
};


export const app = initializeApp(firebaseConfig);
