import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuFXHFsL1Uf1iqnclaH4KQDnoEtemdNLg",
    authDomain: "twitter-clone-bf14f.firebaseapp.com",
    projectId: "twitter-clone-bf14f",
    storageBucket: "twitter-clone-bf14f.appspot.com",
    messagingSenderId: "802968915300",
    appId: "1:802968915300:web:b51743c18252d37ed6be71",
    measurementId: "G-RT9JVZHX12"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;