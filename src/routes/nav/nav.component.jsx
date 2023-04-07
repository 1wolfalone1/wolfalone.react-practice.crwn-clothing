import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import './nav.styles.scss'
const Navigation = () => {
   const {currentUser} = useContext(UserContext);
   return (
      <>
         <div className="navigation">
           {
            currentUser &&  <h1>{`hello ${currentUser.displayName} `}</h1>
           }
            <Link className="logo-container" to='/'>
               <Logo className="logo"/>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                  Shop
               </Link>
               <Link className="nav-link" to="/shop"></Link>
               <Link className="nav-link" to="/shop"></Link>
               <Link className="nav-link" to="/sign-in">Sign In</Link>
            </div>
         </div>
         <Outlet />
      </>
   );
};





export default Navigation;
