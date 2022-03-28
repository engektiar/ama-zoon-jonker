import React from "react";

const Cart = (props) => {
  console.log("props", props);
  const cart = props.cart;
  const price = props.price;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  // const total = cart.reduce((total, prd) => total + prd.price, 0);
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items Ordered= {cart.length}</p>
      <p>Total Price={total}</p>
    </div>
  );
};

export default Cart;
