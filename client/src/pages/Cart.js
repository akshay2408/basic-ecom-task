import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { ViewCart } from "../redux/actions/ViewCart";
import Api from "../redux/apis/apiCalls"

const Cart = () => {

  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ViewCart())
  }, [])

  const Carts = useSelector(state => state.ViewCartReducer.CartList)

  const handleRemoveCart = (product) => {
    console.log(product.id)
    Api.RemoveCart(product.id).then(res => {
      dispatch(ViewCart())
    }).catch(err => {
      console.log("err", err)
    })
  }

  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <h4>Cart Product</h4>
            <div className="container bg-light product-table">
              <div className="row" style={{ placeContent: "center" }}>
                {Carts.map((val, index) => {
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

                        <button className="btn btn-success" onClick={() => handleRemoveCart(val)} > <FaCartPlus /> Remove</button>
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
