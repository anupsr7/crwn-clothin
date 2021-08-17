import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCzhrr8eIKyNAGk2805cypDS84lUOlQO98",
    authDomain: "crwn-a9a1e.firebaseapp.com",
    projectId: "crwn-a9a1e",
    storageBucket: "crwn-a9a1e.appspot.com",
    messagingSenderId: "479646439386",
    appId: "1:479646439386:web:3fea37c210ac7f96fe52e3",
    measurementId: "G-4ZKQRHZDMG"
  }

 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;