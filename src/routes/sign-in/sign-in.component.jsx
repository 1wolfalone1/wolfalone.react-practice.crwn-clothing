import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
   auth,
   signInWithGoogleRedirect,
   signInWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
   useEffect(() => {
      async function a() {
         const response = await getRedirectResult(auth);
         if (response) {
            createUserDocumentFromAuth(response.user);
         }
      }
      a();
   }, []);

   const logGoogleUserRedirect = async () => {
      await signInWithGoogleRedirect();
   };
   const logGoogleUserPopup = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
      console.log(userDocRef);
   };
   return (
      <div>
         <h1>Sign in page</h1>
         <button onClick={logGoogleUserPopup}>Sign in with Google Popup</button>
         <SignUpForm />
      </div>
   );
};

export default SignIn;
