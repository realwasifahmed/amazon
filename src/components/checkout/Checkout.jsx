import React, { useContext } from "react";
import "./Checkout.css";
import Products from "./CheckProducts/products";
import Subtotalbox from "./subtotalBox/subtotalbox";
import { ShopContext } from "../../Context/ShopContext";

function Checkout() {
  const { addToCart } = useContext(ShopContext);

  var totalPrice = 0;

  for (var i = 0; i < addToCart.length; i++) {
    var item = addToCart[i];
    totalPrice += item.price;
  }

  return (
    <div className="cart__container">
      <div className="shop__Cart__Container">
        <h2>Shopping Cart</h2>
        <hr />

        {addToCart.map((e) => {
          return <Products img={e.image} title={e.title} price={e.price} />;
        })}
        <hr />
        <div className="subtotal__price">
          Subtotal ({addToCart.length} item): ${totalPrice}
        </div>
      </div>
      <div className="Total__Price__Container">
        <Subtotalbox totalItem={addToCart.length} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Checkout;
