// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// import { initializeApp } from "firebase/app";
// import { initializeAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getReactNativePersistence } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACPPkFtEGoXxrSkzvZ0rKphwhd7lBOPCc",
//   authDomain: "pharmacy-app-c8a92.firebaseapp.com",
//   projectId: "pharmacy-app-c8a92",
//   storageBucket: "pharmacy-app-c8a92.appspot.com",
//   messagingSenderId: "851346914829",
//   appId: "1:851346914829:web:5428b3a4df4f3552429f44",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
// export const FIREBASE_DB = getFirestore(app);
// export const FIREBASE_STORAGE = getStorage(app);

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACPPkFtEGoXxrSkzvZ0rKphwhd7lBOPCc",
  authDomain: "pharmacy-app-c8a92.firebaseapp.com",
  projectId: "pharmacy-app-c8a92",
  storageBucket: "pharmacy-app-c8a92.appspot.com",
  messagingSenderId: "851346914829",
  appId: "1:851346914829:web:5428b3a4df4f3552429f44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
