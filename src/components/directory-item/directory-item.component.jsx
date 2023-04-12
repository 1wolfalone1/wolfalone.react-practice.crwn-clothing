import "./directory-item.style.scss";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ title, id, imageUrl, route }) => {
   const navigate = useNavigate();

   return (
      <div className="directory-item-container" onClick={()=> {
         navigate(route)
     }}>
         <div
            className="background-image"
            style={{
               backgroundImage: `url(${imageUrl})`,
            }}
         />
         <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
         </div>
      </div>
   );
};

export default DirectoryItem;
