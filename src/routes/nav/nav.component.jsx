import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./nav.styles.scss";
const Navigation = () => {
   const { currentUser} = useContext(UserContext);

   const signOutHandler = async () => {
      await signOutUser();
   }
   console.log(currentUser, "heeeeeeeeeeeeeeeeeeeeee");

return (
      <>
         <div className="navigation">
            {currentUser && <h1>{`hello ${currentUser.displayName} `}</h1>}
            <Link className="logo-container" to="/">
               <Logo className="logo" />
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                  Shop
               </Link>
               <Link className="nav-link" to="/shop"></Link>
               <Link className="nav-link" to="/shop"></Link>
               {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>
                     Sign Out
                  </span>
               ) : (
                  <Link className="nav-link" to="/sign-in">
                     Sign In
                  </Link>
               )}
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default Navigation;
