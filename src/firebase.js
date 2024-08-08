import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqancR7Rp476o6TAK7Loutp5pcKNNkrCU",
  authDomain: "notesapp-3e2cc.firebaseapp.com",
  projectId: "notesapp-3e2cc",
  storageBucket: "notesapp-3e2cc.appspot.com",
  messagingSenderId: "355983263954",
  appId: "1:355983263954:web:0164490371dbda7a45c50b",
  measurementId: "G-4QQ2VT3PL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
