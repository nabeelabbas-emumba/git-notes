import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmT2VfS2OOiqh9PfiGtpr3n51hfmEJwPg",
  authDomain: "my-gist-app-7db0c.firebaseapp.com",
  projectId: "my-gist-app-7db0c",
  storageBucket: "my-gist-app-7db0c.firebasestorage.app",
  messagingSenderId: "494313196773",
  appId: "1:494313196773:web:c6abb0d5e0fd693d62580c",
  measurementId: "G-KFT5PEXQZW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
