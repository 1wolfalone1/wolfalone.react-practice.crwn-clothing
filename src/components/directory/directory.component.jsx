import CategoryItem from "../category-item/category-item.components";
import "./categories.styles.scss";

const Directory = ({ categories }) => {
   return (
      <div className="categories-container">
         {categories.map((cate) => {
            return <CategoryItem {...cate} key={cate.id} />;
         })}
      </div>
   );
};

export default Directory