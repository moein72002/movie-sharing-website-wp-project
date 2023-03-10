import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyAZ2dVo3rqb5n2YkP8AerIDSmfBd78kG5E",
  authDomain: "netflix-a6b8f.firebaseapp.com",
  projectId: "netflix-a6b8f",
  storageBucket: "netflix-a6b8f.appspot.com",
  messagingSenderId: "818610134555",
  appId: "1:818610134555:web:6767a52750be8a2e51e2be",
  measurementId: "G-0QZ1LJ08JZ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
