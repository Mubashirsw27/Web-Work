import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyBqpqL8ydsmWwMqJmNtdXTOWYlL54rMhQY",
    authDomain: "fb-msgr-copy.firebaseapp.com",
    projectId: "fb-msgr-copy",
    storageBucket: "fb-msgr-copy.appspot.com",
    messagingSenderId: "468275472112",
    appId: "1:468275472112:web:8d8e7a67d4acc4a5678435",
    measurementId: "G-RX6L85QM99"
  
});
const db = firebaseApp.firestore();
export default db;