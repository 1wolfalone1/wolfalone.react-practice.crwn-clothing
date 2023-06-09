import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./category-preview.style.scss";


const CategoriesPreview = () => {
   const { categoryMap } = useContext(CategoriesContext);
   return (
      <>
        
         {Object.keys(categoryMap).map((title, index) => {
            const products = categoryMap[title];
            return (
               <CategoryPreview key={title} title={title} products={products} />
            );
         })}
      </>
   );
};

export default CategoriesPreview;
