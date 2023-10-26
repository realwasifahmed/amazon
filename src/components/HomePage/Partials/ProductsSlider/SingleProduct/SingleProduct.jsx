import React from "react";
import "./Singleproduct.css";

function SingleProduct(props) {
  return (
    <div className="SingleProduct">
      <img src={props.img} alt="" />
      <div className="product__details">
        <div className="deals__Container">
          <span className="deals__Tag">{props.deals}</span>
          <span className="deals___tag">Deal</span>
        </div>
        <p className="product__prices">{"$" + props.price}</p>
        <p className="product___title">{props.title}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
