import React, { useContext, useState, useEffect } from "react";
import { kebabCase } from "lodash";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";
import Loading from "../../Loading/Loading";

function SingleProduct() {
  const [product, setProduct] = useState(null);

  const { title } = useParams();
  const { products, setAddToCart, addToCart, setIsProductPage } =
    useContext(ShopContext);

  useEffect(() => {
    const selectProduct = products.find(
      (item) => kebabCase(item.title) === title
    );

    if (selectProduct) {
      setIsProductPage(true);
    }

    setProduct(selectProduct);
  }, [title, products, setIsProductPage]);

  return (
    <div className="SingleProduct">
      {product ? (
        <div className="singleProductContainer">
          <div className="left__img">
            <img src={product.image} alt="" />
          </div>
          <div className="Content">
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => setAddToCart([...addToCart, product])}>
              Add To Cart
            </button>
            <p>Description: {product.description}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SingleProduct;
