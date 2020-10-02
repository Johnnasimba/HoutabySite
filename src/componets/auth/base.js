import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAU9dAiK9iRWiSTJxhkAqgVe9eJjttlupU",
    authDomain: "reactauth-2ad9f.firebaseapp.com",
    databaseURL: "https://reactauth-2ad9f.firebaseio.com",
    projectId: "reactauth-2ad9f",
    storageBucket: "reactauth-2ad9f.appspot.com",
    messagingSenderId: "884797405345",
    appId: "1:884797405345:web:292ca5d1fc395262a298e0",
    measurementId: "G-PSR905Z7CL"
});

export default app;
