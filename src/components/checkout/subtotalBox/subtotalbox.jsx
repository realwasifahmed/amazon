import React from "react";

function subtotalbox(props) {
  return (
    <div className="SubtotalBox">
      <div className="sandBox-Container">
        <p>
          Subtotal ({props.totalItem} item): <strong>${props.totalPrice}</strong>
        </p>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default subtotalbox;
