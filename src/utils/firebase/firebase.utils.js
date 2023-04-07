import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAFdE7VGK8B6q3XSJzrsJj2G7_S8iBeTG0",
   authDomain: "wolfalone-clothing.firebaseapp.com",
   projectId: "wolfalone-clothing",
   storageBucket: "wolfalone-clothing.appspot.com",
   messagingSenderId: "680569124857",
   appId: "1:680569124857:web:fa515bc861807411522f28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

export const auth = getAuth();
export const signInWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userDocRef = doc(db, "users", userAuth.uid);

   const userSnapShot = await getDoc(userDocRef);

   if (!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createAt,
            ...additionalData,
         });
      } catch (err) {
         console.log(err, "erorrrrrrrrrrrrrrrrrrrrrrrrrr");
      }
   }
   return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) {
      return;
   }

   return await createUserWithEmailAndPassword(auth, email, password);
};
