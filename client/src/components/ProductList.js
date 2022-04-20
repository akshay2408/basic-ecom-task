import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../redux/operations/carts"
import { toast } from "react-toastify";
import Model from "./ProductModel";

const ProductList = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCart = (val) => {
    addToCart(val).then(res => {
      if (res && res.data) {
        toast(res.data, { type: "success" });
        setOpen(false)
      }
      else {
        toast("something went wrong!", { type: "error" });
        setOpen(false)
      }
    }).catch(err => {
      toast("something went wrong!", { type: "error" });
    })
      .catch((err) => {
        console.log(err);
        setOpen(false);
      });
  };

  const handleModal = () => setOpen(!open);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    setOpen(!open);
  };

  return (
    <div className="container databg-light product-table my-2">
      <div
        className="row mx-0 align-items-stretch"
        style={{ placeContent: "center" }}
      >
        {products?.map((product, index) => {
          return (
            <div key={index} className="col-md-3 col-sm-6 col-6 my-3">
              <div className="card p-md-3 p-sm-2 p-2 bg-light h-100">
                <img
                  className="card-img-top"
                  src={product.image}
                  onClick={() => handleProductSelection(product)}
                  alt="Card"
                />
                <div className="card-body text-center px-0">
                  <h4 className="card-title"> {product.productName} </h4>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <p> stock {product.stock}</p>
                  <div className="">
                    <button
                      className="btn btn-success mt-2"
                      style={{ textSize: "20px" }}
                      onClick={() => handleCart(product)}
                    >
                      <FaCartPlus />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {open && (
        <Model
          handleModal={handleModal}
          open={open}
          handleCart={handleCart}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};
export default ProductList;
