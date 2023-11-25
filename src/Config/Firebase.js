import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPGAs0eYenq12PxkWePDoQNBY8mSeONCM",
  authDomain: "e-commerce-fcdf9.firebaseapp.com",
  projectId: "e-commerce-fcdf9",
  storageBucket: "e-commerce-fcdf9.appspot.com",
  messagingSenderId: "819949723338",
  appId: "1:819949723338:web:fd9beb6873531cf6fd9e33"
};

firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore();
firebase.auth = firebase.auth();

export default firebase