import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaDa7FrlByWW9y3MNdiKggK9HyT2u8I4M",
    authDomain: "crwn-db-d9d57.firebaseapp.com",
    databaseURL: "https://crwn-db-d9d57.firebaseio.com",
    projectId: "crwn-db-d9d57",
    storageBucket: "",
    messagingSenderId: "494296244953",
    appId: "1:494296244953:web:1f8f42a243fd276f"
  };
  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt: 'select_account'});
  export const signInWithGoogle= ()=> auth.signInWithPopup(provider);

  export default firebase;