import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC5Vto7Hjtyuk3a-lVv5IpbjUnMaZznRJ4",
    authDomain: "unichat-1b3ed.firebaseapp.com",
    projectId: "unichat-1b3ed",
    storageBucket: "unichat-1b3ed.appspot.com",
    messagingSenderId: "485670190422",
    appId: "1:485670190422:web:fe10b90bd662d5fc2f2af7"
  }).auth();