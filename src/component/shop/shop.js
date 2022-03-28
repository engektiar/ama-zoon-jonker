import React from "react";
import fakedata from "../../fakeData/products.json";
import { useState } from "react";
import "./shop.css";
import Product from "../product/product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const firs10 = fakedata.slice(0, 10);
  const [products, setProduct] = useState(firs10);

  const [cart, setCard] = useState([]);

  const handelclick = () => {
    console.log("product added", products);
    const newCard = [...cart, products];
    setCard(newCard);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((pd) => (
            <Product handelclick={handelclick} product={pd}></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

// import React, { Component } from "react";
// import PostData from "../../fakeData/products.json";
// import Product from "../product/product";
// import "./shop.css";
// class PostList extends Component {
//   render() {
//     return (
//       <div className="shop-container">
//         <div className="product-container">
//           {PostData.map((pd) => {
//             return <Product ektiar={pd}> </Product>;
//           })}
//         </div>
//         <div className="cart-container">
//           <h3>This is cart</h3>
//         </div>
//       </div>
//     );
//   }
// }

// export default PostList;
