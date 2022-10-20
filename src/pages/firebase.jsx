// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCoiZX6Pq9XPsQNaB1UAHH98uuraUdnsMk",
  authDomain: "nextpericias.firebaseapp.com",
  projectId: "nextpericias",
  storageBucket: "nextpericias.appspot.com",
  messagingSenderId: "762816208470",
  appId: "1:762816208470:web:1387c3177eba5d025725f7",
  measurementId: "G-NV3Q61DP4V"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export default {app/* , analytics */}