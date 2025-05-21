// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyAAtiuIpcBQ8pLfJDvd_PrFdVAA13HPd14",
authDomain: "barberiaapp-aeaac.firebaseapp.com",
projectId: "barberiaapp-aeaac",
storageBucket: "barberiaapp-aeaac.appspot.com",
messagingSenderId: "103742839829",
appId: "1:103742839829:web:20635a15b8b555f12fe021c",
measurementId: "G-S90QEMB50J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

