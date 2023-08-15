import React from "react";

const ProductContext = React.createContext({
    products: [],
    addItem: (item) =>{},
});

export default ProductContext;