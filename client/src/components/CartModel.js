import React from 'react';
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { removeCart } from '../redux/operations/carts';

function CartModel({ open, handleModal, total, user }) {
  toast.configure();
  const history = useHistory()

  const orderPlaced = () => {
    handleModal()
    history.push("/")
    toast("Order placed successfully!", { type: "success" });
    removeCart()
  }

  return (
    <Modal show={open} onHide={handleModal}>
      <Modal.Header className="bg-warning text-light" closeButton >
        <Modal.Title>
          {" "}
          <strong> Orders </strong>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
          <div className="body-name">
            <FaUser /> <strong>Name: {user.username} </strong>
          </div>

          <div className="body-price">
            <strong>Amount: ${total} </strong>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <button
          className="btn btn-success mt-2"
          style={{ textSize: "20px" }}
          onClick={orderPlaced}
        >
          Place your Order
        </button>
      </Modal.Footer>
    </Modal>

  )
}

export default CartModel