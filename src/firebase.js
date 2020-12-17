
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWfkL1sz3QwRLMkJGlkLFLpljqGvZDVKk",
    authDomain: "whatsapp-clone-262fc.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-262fc.firebaseio.com",
    projectId: "whatsapp-clone-262fc",
    storageBucket: "whatsapp-clone-262fc.appspot.com",
    messagingSenderId: "461818523231",
    appId: "1:461818523231:web:7069ce58d0c033ab8ff5ea",
    measurementId: "G-2FN35DTLNB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
  