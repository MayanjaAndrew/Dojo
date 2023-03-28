import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4KEqnFM9sVJrI5hiVUu0CwyXXIrQ82lg",
  authDomain: "thedojo-70295.firebaseapp.com",
  projectId: "thedojo-70295",
  storageBucket: "thedojo-70295.appspot.com",
  messagingSenderId: "195436255001",
  appId: "1:195436255001:web:d0517b5988fa0226389788",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth };
