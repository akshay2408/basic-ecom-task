import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts } from "../redux/actions/cartsAction";
import { removeCart, updateCart } from "../redux/operations/carts"

import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartModel from "../components/CartModel";
import Invoice from "../components/Invoice";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  const dispatch = useDispatch()
  let cartList = useSelector(state => state.cartsReducer.cartList)
  const loginUser = useSelector((state) => state?.userReducer?.userinfo);

  useEffect(() => {
    dispatch(getAllCarts())
  }, [dispatch])

  useEffect(() => {
    let total = 0
    cartList.forEach((item) => {
      total = total + item.total_price
    })
    setSubTotal(total)
  }, [cartList])

  const handleModal = () => setOpen(!open);

  const handleRemoveCart = (product) => {
    console.log(product.id)
    removeCart(product.id).then(res => {
      setTimeout(() => {
        dispatch(getAllCarts())
      }, 1000)
    }).catch(err => {
      console.log("err", err)
    })
  }

  const handleQuantityInc = (val) => {
    updateCart({ id: val.id, quantity: val.quantity + 1 }).then(() => {
      setTimeout(() => {
        dispatch(getAllCarts())
      }, 500)
    })
  }

  const handleQuantityDec = (val) => {
    updateCart({ id: val.id, quantity: val.quantity - 1 }).then(() => {
      setTimeout(() => {
        dispatch(getAllCarts())
      }, 500)
    })
  }

  return (
    <div>
      <div className="container my-2" style={{ marginTop: "100px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            {cartList.length > 0 && <h4 style={{ marginTop: "100px" }}>
              {" "}
              My Cart <FaShoppingCart />
            </h4>}
            {cartList.length > 0 ? <div className="row d-md-flex  d-sm-block d-block my-2">
              <Invoice
                cartList={cartList}
                subTotal={subTotal}
                handleModal={handleModal}
              />
              <div className="col-md-6 col-sm-12 col-12  cart-product">
                <div className="container bg-light product-table p-0">
                  <div className="row align-items-stretch" style={{ placeContent: "center" }}>
                    {cartList.map((val, index) => (
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
                            alt="Card"
                          />
                          <div className="card-body px-0 py-2 text-center">
                            <h4 className="card-title"> {val.productName} </h4>
                            <p className="card-text">
                              <strong>${val.price}</strong>
                            </p>
                            <div className="">
                              <div className="quantity d-flex align-items-center justify-content-center">
                                <button className="btn btn-primary"
                                  disabled={val?.quantity === 1}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    handleQuantityDec(val)
                                  }}
                                >-</button>
                                <p className="p-3"> {val?.quantity}</p>
                                <button className="btn btn-primary"
                                  disabled={val.stock <= val?.quantity}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    handleQuantityInc(val)
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
                    )
                    )}
                  </div>
                </div>
              </div>
            </div>
              :
            <div style={{ marginTop: "20%", marginLeft: "35%" }}>
              Your cart is empty. Add some! <Link to="/">browse products</Link></div>}
            {/*main row...*/}
          </div>
        </div>
      </div>
      {open && (
        <CartModel
          handleModal={handleModal}
          open={open}
          total={subTotal}
          user={loginUser}
        />
      )}
    </div>
  );
};
export default Cart;
