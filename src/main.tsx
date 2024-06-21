import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCCWTIDKCuywhBDp_VVjzi7rwmkz8mgquk",
  authDomain: "sf-dream-home.firebaseapp.com",
  projectId: "sf-dream-home",
  storageBucket: "sf-dream-home.appspot.com",
  messagingSenderId: "291772519093",
  appId: "1:291772519093:web:5131f365c2ecb3051124fc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
