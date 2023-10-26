import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [addToCart, setAddToCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isProductPage, setIsProductPage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        const selectedProduct = data;
        setProducts(selectedProduct);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    fetchData();
  }, []);

  const removeCart = () => {};

  const contextValue = {
    products,
    setAddToCart,
    addToCart,
    isProductPage,
    setIsProductPage,
    removeCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
