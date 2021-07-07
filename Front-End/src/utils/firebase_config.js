import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBjO8Qlnr2Ol36fJJwsUSWgfYGSynlO5kI",
    authDomain: "pickme-9eb05.firebaseapp.com",
    projectId: "pickme-9eb05",
    storageBucket: "pickme-9eb05.appspot.com",
    messagingSenderId: "716227229731",
    appId: "1:716227229731:web:1633ec7eabde563f841996"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
  

