import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbKdzo35ifL60b7p_gmvBZpp2OG3c0aW0",
  authDomain: "twitteryun-4395f.firebaseapp.com",
  projectId: "twitteryun-4395f",
  storageBucket: "twitteryun-4395f.appspot.com",
  messagingSenderId: "878944811420",
  appId: "1:878944811420:web:427fd4fb28bc7c0f3ff059"
};

// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);