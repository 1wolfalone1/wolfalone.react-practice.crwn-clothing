import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {
   createUserDocumentFromAuth,
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.style.scss";

const defautFormField = {
   email: "",
   password: "",
};
const SignInForm = () => {
   const [formFields, setFormField] = useState(defautFormField);
   const { email, password } = formFields;
   console.log(formFields);

   const resetFormField = () => {
      setFormField(defautFormField);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();

      signInAuthUserWithEmailAndPassword(email, password)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.error("user creation encountered an error", error);
            alert(error);
         });
   };
   const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
   };
   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormField({ ...formFields, [name]: value });
   };

   return (
      <div className="sign-up-container">
         <h2>Already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Email"
               type="email"
               required
               onChange={handleChange}
               name="email"
               value={email}
            />
            <FormInput
               label="Password"
               type="password"
               required
               onChange={handleChange}
               name="password"
               value={password}
            />
            <div className="buttons-container">
               <Button type="submit">Sign In</Button>
               <Button type='button' buttonType="google" onClick={signInWithGoogle}>
                  Google sign in
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SignInForm;
