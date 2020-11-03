import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDt6MEtd_OsZU26WRFMAvAMVD6WjpxMSSc",
  authDomain: "test-project-c3681.firebaseapp.com",
  databaseURL: "https://test-project-c3681.firebaseio.com",
  projectId: "test-project-c3681",
  storageBucket: "test-project-c3681.appspot.com",
  messagingSenderId: "92878558222",
  appId: "1:92878558222:web:969dc0500ff3f9ead3585f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };