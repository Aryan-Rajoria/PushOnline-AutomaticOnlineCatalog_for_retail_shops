import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5EisLV5f3FIF8gWiDyM6-q6nyLxG8ws0",
  authDomain: "pushonline-20f67.firebaseapp.com",
  databaseURL: "https://pushonline-20f67.firebaseio.com",
  projectId: "pushonline-20f67",
  storageBucket: "pushonline-20f67.appspot.com",
  messagingSenderId: "288046796367",
  appId: "1:288046796367:web:91a022f63ccae238a4243a",
  measurementId: "G-XLP4FHYZ0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };