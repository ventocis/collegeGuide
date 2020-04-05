// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyhp4VayCMrhO436RSOPchHbyNy1_qT3U",
  authDomain: "collegeguide-c1215.firebaseapp.com",
  databaseURL: "https://collegeguide-c1215.firebaseio.com",
  projectId: "collegeguide-c1215",
  storageBucket: "collegeguide-c1215.appspot.com",
  messagingSenderId: "439095456392",
  appId: "1:439095456392:web:124a685dee8284e533a53d",
  measurementId: "G-VQGYX0M61J"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();