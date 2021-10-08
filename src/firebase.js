import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXyXrhpwSXr6l1U_5Xzhg4fZXptGZ1EWQ",
  authDomain: "discord-clone-faf22.firebaseapp.com",
  projectId: "discord-clone-faf22",
  storageBucket: "discord-clone-faf22.appspot.com",
  messagingSenderId: "1084888613747",
  appId: "1:1084888613747:web:16bd0621db5f6a3e873b06",
  measurementId: "G-HWYPJKJLLG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
