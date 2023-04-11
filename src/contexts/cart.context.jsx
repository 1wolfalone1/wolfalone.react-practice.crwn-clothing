import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems = [], productToAdd) => {
   const existingCartItem = cartItems.find(
      (item) => item.id === productToAdd.id
   );

   if (existingCartItem) {
      return cartItems.map((cartItem) => {
         if (cartItem.id === productToAdd.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
         } else {
            return cartItem;
         }
      });
   }

   return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseItem  = (cartItems, id) => {
   return cartItems.reduce((acc,cartItem) => {
      if(cartItem.id === id){
         if(cartItem.quantity === 1){
         } else {
           acc.push({...cartItem, quantity: cartItem.quantity - 1})  
         }
      }else {
         acc.push(cartItem)
      }
      return acc;
   }, [])
}

const removeItems = (cartItems = [], id) => {
   return cartItems.reduce((acc, item) => {
      if (item.id !== id) {
         acc.push(item)
      } 
      return acc
   }, []);
};


export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   cartCount: 0,
   removeItemFromCart: () => {},
   decreaseItemFromCart: () => {},
   cartTotal: 0
});

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0)
   useEffect(() => {
      const newCartCount = cartItems.reduce(
         (acc, item) => acc + item.quantity,
         0
      );
      setCartCount(newCartCount);
   }, [cartItems]);

   useEffect(()=> {
      const newCartTotal = cartItems.reduce(
         (acc, item) => acc + (item.quantity * item.price), 0
      )
      setCartTotal(newCartTotal);
   }, [cartItems])
   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItems(cartItems, productToAdd));
   };
   const removeItemFromCart = (id) => {
      setCartItems(removeItems(cartItems, id));
   };
   const decreaseItemFromCart = (id) => {
      setCartItems(decreaseItem(cartItems, id));
   }

   const value = {
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      cartCount,
      removeItemFromCart,
      decreaseItemFromCart,
      cartTotal,
      setCartTotal
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
