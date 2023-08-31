import React from "react";

const ProductContext = React.createContext({
    items: [],
    updateCartItems: ()=>{},
    addItem: (item) =>{},
    removeItem:(item)=>{},
    totalItems: 0
});

export default ProductContext;