import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css"
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
    <div className="container bg-light product-table my-2">
      <div className="row mx-0 align-items-stretch" style={{ placeContent: "center" }}>
        { products.map((val, index) => {
          return (
            <div
              key={index}
              className="col-md-3 col-sm-6 col-6 my-3"
            >
              <div className="card p-md-3 p-sm-2 p-2 bg-light h-100">
                  <img className="card-img-top" src={val.image} alt="Card image" />
                  <div className="card-body text-center px-0">
                    <h4 className="card-title"> {val.productName} </h4>
                    <p className="card-text">
                      <strong>${val.price}</strong>
                    </p>
                    <div className="">
                      <Link href="#" className="btn btn-primary">
                        <FaCartPlus /> Add to Cart
                      </Link>
                    </div>
                  </div>
              </div>    
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
