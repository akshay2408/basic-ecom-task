import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewCart } from "../redux/actions/cartsAction";
import Api from "../redux/opretions/apiCalls"
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Table } from "react-bootstrap";
import "./Cart.css"

const Cart = () => {

  const [subTotal, setSubTotal] = useState(0);

  const dispatch = useDispatch()
  let Carts = useSelector(state => state.cartsReducer.CartList)

  useEffect(() => {
    dispatch(ViewCart())
  }, [])

  useEffect(() => {
    let total = 0
    Carts.forEach((item) => {
      total = total + item.total_price
    })
    setSubTotal(total)
  }, [Carts])

  const handleRemoveCart = (product) => {
    console.log(product.id)
    Api.removeCart(product.id).then(res => {
      setTimeout(() => {
        dispatch(ViewCart())
      }, 500)
    }).catch(err => {
      console.log("err", err)
    })
  }

  const handleQuentityInc = (val) => {
    dispatch(Api.updateCart({ id: val.id, quantity: val.quantity + 1 })).then(res => {
      setTimeout(() => {
        dispatch(ViewCart())
      }, 1000)
    })
  }
  const handleQuentityDec = (val) => {
    dispatch(Api.updateCart({ id: val.id, quantity: val.quantity - 1 })).then(res => {
      setTimeout(() => {
        dispatch(ViewCart())
      }, 1000)
    })
  }


  return (
    <div>
      <div className="container my-2" style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <h4 className="mt-3">
              {" "}
              Your Cart <FaShoppingCart />
            </h4>
            <div className="row d-md-flex  d-sm-block d-block my-2">
              <div className="col-md-6 col-sm-12 col-12 my-3 billing">
                <div className="product-table">
                  <Table striped bordered hover variant="light">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col-2">Quantity x Price</th>
                        <th scope="col">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Carts &&
                        Carts.map((item, i) => {

                          return (<tr key={i}>
                            <td>{item.productName}</td>

                            <td>{item.quantity} * {item.price}</td>

                            <td>{item.total_price}</td>
                          </tr>)
                        })}
                    </tbody>
                  </Table>
                </div>

                <div style={{ display: "flex" }}>
                  <h4>Total: {subTotal}</h4>
                  <div style={{ marginLeft: "auto" }}>
                    <button className="btn btn-warning">CheckOut</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12  cart-product">
                <div className="container bg-light product-table p-0">
                  <div className="row align-items-stretch" style={{ placeContent: "center" }}>
                    {Carts.map((val, index) => {
                      return (
                        <div
                          key={index}
                          className="col-md-6 col-6 h-100"
                        >
                          <div className="card my-3 p-2 bg-light">
                            <img
                              className="card-img-top"
                              src={val.image}
                              height={100}
                              width={50}
                              alt="Card image"
                            />
                            <div className="card-body px-0 py-2 text-center">
                              <h4 className="card-title"> {val.productName} </h4>
                              <p className="card-text">
                                <strong>${val.price}</strong>
                              </p>
                              <div className="">
                                <div className="quantity d-flex align-items-center justify-content-center">
                                  <button className="btn btn-primary"
                                    disabled={val.quantity == 1}
                                    onClick={(e) => {
                                      e.preventDefault()
                                      handleQuentityDec(val)
                                    }}
                                  >-</button>
                                  <p className="p-3"> {val.quantity}</p>
                                  <button className="btn btn-primary"
                                    disabled={val.stock <= val.quantity}
                                    onClick={(e) => {
                                      e.preventDefault()
                                      handleQuentityInc(val)
                                    }}
                                  >+</button>
                                </div>
                                <button className="btn btn-danger mt-2" style={{ textSize: "20px" }} onClick={() => handleRemoveCart(val)}>
                                  <FaCartPlus /> Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>{" "}
              {/*cart-product col...*/}
            </div>{" "}
            {/*main row...*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
