import './category-item.styles.scss'
import { useNavigate } from 'react-router-dom'
const CategoryItem = ({ title, id, imageUrl }) => {

   const navigate = useNavigate();

    return (
        <div className="category-container">
        <div
           className="background-image"
           style={{
              backgroundImage: `url(${imageUrl})`,
           }}
        />
        <div className="category-body-container" onClick={()=> {
            navigate("/shop")
        }}>
           <h2>{title}</h2>
           <p>Shop now</p>
        </div>
     </div>
    )
}

export default CategoryItem