import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAkFNyz9PO2V-3J7QQMqLQ65x6FxeDm4Tc",
        authDomain: "todo-with-react-js.firebaseapp.com",
        projectId: "todo-with-react-js",
        storageBucket: "todo-with-react-js.appspot.com",
        messagingSenderId: "347594724054",
        appId: "1:347594724054:web:221ce22d4c5dc0aa5a6f77",
        measurementId: "G-VV5HSQ6D6H"
    }
);

const db = firebaseApp.firestore();

export default db ;