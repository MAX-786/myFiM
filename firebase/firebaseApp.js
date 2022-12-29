import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC95nXcNrO14QtA-Sf5HLxK3Nb-RQ705Tk",
  authDomain: "myfim-ebac7.firebaseapp.com",
  projectId: "myfim-ebac7",
  storageBucket: "myfim-ebac7.appspot.com",
  messagingSenderId: "726543342580",
  appId: "1:726543342580:web:3ae33a5ddbfccf35b8f7a1",
  measurementId: "G-6X2V4KNK9L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
};