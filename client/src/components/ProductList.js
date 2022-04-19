import React from "react";
import { Link } from "react-router-dom";


import { FaCartPlus } from "react-icons/fa";
import Api from "../redux/apis/apiCalls"

const ProductList = ({products}) => {

  const handleCart = (val) => {
    Api.AddtoCart(val).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="container bg-light product-table">
      <div className="row" style={{ placeContent: "center" }}>
        {products.map((val, index) => {
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
                <button className="btn btn-success" onClick={() => handleCart(val)} > <FaCartPlus /> Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
