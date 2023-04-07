import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
   auth,
   signInWithGoogleRedirect,
   signInWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import './authentication.style.scss'
const Authentication = () => {
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
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div className="authentication-container">
         <SignInForm/>
         <SignUpForm />
      </div>
   );
};

export default Authentication;
