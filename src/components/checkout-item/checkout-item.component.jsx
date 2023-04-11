import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cartItem }) => {
   const { removeItemFromCart, addItemToCart, decreaseItemFromCart } = useContext(CartContext);
   const { name, imageUrl, price, quantity, id } = cartItem;
   console.log(removeItemFromCart, "remove item from cart");
   return (
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt="" />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <div className="arrow" onClick={()=> {decreaseItemFromCart(id)}}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=> {addItemToCart(cartItem)}}>&#10095;</div>
         </span>
         <span className="price">{price}</span>
         <div
            className="remove-button"
            onClick={() => {
               removeItemFromCart(id);
            }}
         >
            &#10005;
         </div>
      </div>
   );
};

export default CheckoutItem;
