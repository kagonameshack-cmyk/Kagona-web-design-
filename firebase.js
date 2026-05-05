// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEdCUAA-857YvN1mFTecfGFb2eO2jwqJE",
  authDomain: "kagona-web-design.firebaseapp.com",
  projectId: "kagona-web-design",
  storageBucket: "kagona-web-design.firebasestorage.app",
  messagingSenderId: "895047386125",
  appId: "1:895047386125:web:8632bbc8bd4a300cb40144"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export so other files can use it
export { db, collection, addDoc };
