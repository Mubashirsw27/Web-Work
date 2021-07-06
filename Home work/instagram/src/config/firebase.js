import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoZfd5dJoTZXgzurxdfpM17OrFzDeKEDU",
    authDomain: "insta-clone-with-react-by-27.firebaseapp.com",
    databaseURL: "https://insta-clone-with-react-by-27-default-rtdb.firebaseio.com",
    projectId: "insta-clone-with-react-by-27",
    storageBucket: "insta-clone-with-react-by-27.appspot.com",
    messagingSenderId: "356052773996",
    appId: "1:356052773996:web:430ad78752cae647347c49",
    measurementId: "G-WFQGLGBPG1"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export{
    db,
    auth,
    storage
};