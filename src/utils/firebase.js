import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"
import {Redirect, useHistory} from "react-router-dom"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
   
    auth.signInWithPopup(googleProvider).then((res) => {
        // history.push('/products')
        console.log(res.user)
    }).catch((error)=> {
        console.log(error.message)
    })
}