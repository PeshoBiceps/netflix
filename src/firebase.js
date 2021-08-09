import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD_xtR6g5c_OlH0vf56UTi-plpxwcVdv9Q",
  authDomain: "netflix-clone-peshow.firebaseapp.com",
  projectId: "netflix-clone-peshow",
  storageBucket: "netflix-clone-peshow.appspot.com",
  messagingSenderId: "408164269758",
  appId: "1:408164269758:web:32d9fc00648a285ebaa8ef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;