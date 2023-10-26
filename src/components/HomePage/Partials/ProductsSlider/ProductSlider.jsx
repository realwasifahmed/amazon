import React from "react";
import "./ProductSlider.css";
import SingleProduct from "./SingleProduct/SingleProduct";
function ProductSlider(props) {
  return (
    <div className="Container">
      <h2>{props.title}</h2>
      <div className="ProductSlider">
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
        <SingleProduct
          img="http://tiny.cc/dt1cvz"
          deals="25% Off"
          price="50.97"
          title="Mikasa V200W"
        />
      </div>
    </div>
  );
}

export default ProductSlider;
