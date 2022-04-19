import React from "react";
import { Link } from "react-router-dom";

import products from "../Product.json";
import { FaCartPlus } from "react-icons/fa";

const ProductList = (props) => {
  return (
    <div className="container bg-light product-table">
      <div className="row" style={{ placeContent: "center" }}>
        { products.map((val, index) => {
          return (
            <div
              key={index}
              className="card mx-2 my-2 col-6 bg-light"
              style={{ width: "270px", height: "auto" }}
            >
              <img className="card-img-top" src={val.image} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title"> {val.productName} </h4>
                <p className="card-text">
                  <strong>${val.price}</strong>
                </p>
                <Link href="#" className="btn btn-primary">
                  <FaCartPlus /> Add to Cart
                </Link>
              </div>
            </div>
          );
        }) }
      </div>
    </div>
  );
};
export default ProductList;
