import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

import products from "../Product.json";
import { FaCartPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

const Cart = () => {
 
  const [total, setTotal] = useState(0);
  

  const data = useSelector((state) => state.ViewCartReducer.ViewCart);
  console.log("data::::", data);
  
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <h4>Cart Product</h4>
            <div className="container bg-light product-table">
              <div className="row" style={{ placeContent: "center" }}>
                {products.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="card mx-2 my-2 col-6 bg-light"
                      style={{ width: "270px", height: "auto" }}
                    >
                      <img
                        className="card-img-top"
                        src={val.image}
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title"> {val.productName} </h4>
                        <p className="card-text">
                          <strong>${val.price}</strong>
                        </p>
                       
                        <Link to="#" className="btn btn-primary">
                          <FaCartPlus /> Remove From Cart
                        </Link>
                      </div>
                    </div>
                  );
                })}

                <div style={{ display: "flex" }}>
                  <h4>Total: {total}</h4>
                  <div style={{ marginLeft: "80%" }}>
                    <button className="btn btn-warning">
                      CheckOut
                    </button>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
