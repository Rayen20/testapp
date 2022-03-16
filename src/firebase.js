import * as firebase from "firebase";


import "firebase/database";



let config = {
    apiKey: "AIzaSyCC84UgH7wGOOTonrVIUiyeVMi12AuXB7Y",
    authDomain: "test-c0f25.firebaseapp.com",
    databaseURL: "https://test-c0f25-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-c0f25",
    storageBucket: "test-c0f25.appspot.com",
    messagingSenderId: "157883452992",
    appId: "1:157883452992:web:046a267801a1f6460959a5",
    measurementId: "G-G1DV4PQY35"
};

firebase.initializeApp(config);

export default firebase.database();

