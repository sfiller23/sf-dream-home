// firebaseApp.ts
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config.ts";

export const app = initializeApp(firebaseConfig);
