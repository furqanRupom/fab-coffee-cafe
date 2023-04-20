// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH1gK8zKQVlqintjYyr-8ikDpa1AkbM9I",
  authDomain: "fab-coffe-cafe.firebaseapp.com",
  projectId: "fab-coffe-cafe",
  storageBucket: "fab-coffe-cafe.appspot.com",
  messagingSenderId: "951011303350",
  appId: "1:951011303350:web:40d5138f3808210722ab17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;