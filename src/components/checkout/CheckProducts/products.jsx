import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";

function Products(props) {
  const { removeCart } = useContext(ShopContext);

  const handleRemoveClick = (e) => {
    console.log(e.target.parentElement);
  };

  return (
    <div className="Cart_Products">
      <img src={props.img} alt={props.title} />
      <div className="product___details">
        <h2>{props.title}</h2>
        <p>${props.price}</p>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </div>
  );
}

export default Products;
