import DirectoryItem from "../directory-item/directory-item.component";
import "./categories.styles.scss";

const Directory = ({ categories }) => {
   return (
      <div className="categories-container">
         {categories.map((cate, index) => {
            return <DirectoryItem {...cate} key={cate.id} route={`shop/${cate.title}`}/>;
         })}
      </div>
   );
};

export default Directory