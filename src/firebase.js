import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYk594ZNFVCHNpaWrvh31s567SvVhgzto",
  authDomain: "dummy-linkedin-clone-56f2d.firebaseapp.com",
  projectId: "dummy-linkedin-clone-56f2d",
  storageBucket: "dummy-linkedin-clone-56f2d.appspot.com",
  messagingSenderId: "390303587394",
  appId: "1:390303587394:web:0e9ec04af9f96d95c561db",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDtRXhk_Pw-touv4MUk_SGuCcMSmHoPv5s",
//   authDomain: "linkedin-clone-yt-993c9.firebaseapp.com",
//   projectId: "linkedin-clone-yt-993c9",
//   storageBucket: "linkedin-clone-yt-993c9.appspot.com",
//   messagingSenderId: "987745786524",
//   appId: "1:987745786524:web:0416364016ef0f0ef36b59",
// };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
