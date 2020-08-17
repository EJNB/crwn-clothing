import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq23sRqvMOodAri4XZPQCc84sAYngG7xk",
  authDomain: "crwn-db-1623b.firebaseapp.com",
  databaseURL: "https://crwn-db-1623b.firebaseio.com",
  projectId: "crwn-db-1623b",
  storageBucket: "crwn-db-1623b.appspot.com",
  messagingSenderId: "475106391198",
  appId: "1:475106391198:web:da8c39fecd7d4c0007f78f",
  measurementId: "G-PRPE3ELLQT",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
