import React from "react";

const ProductContext = React.createContext({
    products: [],
    addItem: (item) =>{},
    totalItems: 0
});

export default ProductContext;