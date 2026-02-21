// src/firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3WOIu-_a2pR5QYma7BLQgGFhGDN_y578",
  authDomain: "portfolio-13c57.firebaseapp.com",
  projectId: "portfolio-13c57",
  storageBucket: "portfolio-13c57.firebasestorage.app",
  messagingSenderId: "803355150801",
  appId: "1:803355150801:web:f59da4a99aac3d36c1f8f0",
  measurementId: "G-WZXT9B3920",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
