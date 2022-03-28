import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>

        <p>
          <small>Only{stock}Left in stock order soon</small>{" "}
        </p>
        <button className="main-button" onClick={() => props.handelclick(props.Product)}>
          <ShoppingCartIcon />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
