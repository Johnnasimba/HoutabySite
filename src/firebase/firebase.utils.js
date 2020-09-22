import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCWEN3ReUfuRWZ-upXhX-Em35Sz_UKLTqE",
    authDomain: "houtbaysite.firebaseapp.com",
    databaseURL: "https://houtbaysite.firebaseio.com",
    projectId: "houtbaysite",
    storageBucket: "houtbaysite.appspot.com",
    messagingSenderId: "204160205139",
    appId: "1:204160205139:web:1e7b9e59910b29758921a6",
    measurementId: "G-RQ0VKH1NEG"
  };
  
  firebase.initializeApp(firebaseConfig);
  
export const auth = firebase.auth();
export const firestre = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;