import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAxCrIk45ix4byBuhcvQntuBp__rTdnTf8",
  authDomain: "app-f222a.firebaseapp.com",
  projectId: "app-f222a",
  storageBucket: "app-f222a.appspot.com",
  messagingSenderId: "617015014258",
  appId: "1:617015014258:web:41d37c52be93a52cdb63eb",
  measurementId: "G-QRQL54EK2M"
};
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };