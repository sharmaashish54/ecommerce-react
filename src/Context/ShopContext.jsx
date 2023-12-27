import React, { createContext,useState } from "react";

import all_products from '../Components/Assets/all_product'


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let index=0;index < all_products.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart= (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart= (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]-1}));
    }

    const getTotalCartValue = () => {
        let total = 0;
        // Assuming all_products is an array of products with prices
        all_products.forEach((product) => {
          if (cartItems[product.id] > 0) {
            total += product.new_price * cartItems[product.id];
          }
        });
      
        return total;
      };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }  

    const contextValue = {all_products,cartItems,addToCart,removeFromCart,getTotalCartValue,getTotalCartItems}
    return (<ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider> )
}

export default ShopContextProvider