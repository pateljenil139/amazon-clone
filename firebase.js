import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  //add your firebase data 
};
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
