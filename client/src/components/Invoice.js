import { Table } from "react-bootstrap";

const Invoice = ({ cartList, subTotal, handleModal }) => (
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
          {cartList &&
            cartList.map((item, i) => (
            <tr key={i}>
                <td>{item.productName}</td>
                <td>{item.quantity} * {item.price}</td>
                <td>{item.total_price}</td>
              </tr>)
            )}
        </tbody>
      </Table>
    </div>
    <div style={{ display: "flex" }}>
      <h4>Total: ${subTotal}</h4>
      <div style={{ marginLeft: "auto" }}>
        <button className="btn btn-warning" onClick={handleModal}>Check Out</button>
      </div>
    </div>
  </div>
)

export default Invoice;