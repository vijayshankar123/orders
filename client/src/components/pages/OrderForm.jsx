import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productAction";
import uuid from "uuid";

const OrderForm = ({ addProduct, history }) => {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    product: "Product 1",
    quantity: ""
  });
  const { customer_email, customer_name, product, quantity } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const id = uuid.v4();
    addProduct({
      id,
      customer_email,
      customer_name,
      product,
      quantity,
      history
    });

    setFormData({
      customer_name: "",
      customer_email: "",
      product: "Product 1",
      quantity: ""
    });
  };

  return (
    <div className="container">
      <h1 className="large text-primary">Create New Order</h1>
      <p className="lead">
        <i className="fas fa-user" />
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer Name"
            name="customer_name"
            value={customer_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Customer Email"
            name="customer_email"
            value={customer_email}
            onChange={onChange}
            required
          />
        </div>
        <label htmlFor="product1">Product 1 </label>
        {"  "}
        <span>
          <input
            type="radio"
            name="product"
            value="Product 1"
            id="product1"
            checked={product === "Product 1"}
            onChange={onChange}
          />{" "}
        </span>

        <label htmlFor="product2">Product 2 </label>
        {"  "}
        <span>
          <input
            type="radio"
            name="product"
            value="Product 2"
            id="product2"
            checked={product === "Product 2"}
            onChange={onChange}
          />
          {"   "}
        </span>
        <label htmlFor="product3">Product 3 </label>
        {"  "}
        <span>
          <input
            type="radio"
            name="product"
            value="Product 3"
            id="product3"
            checked={product === "Product 3"}
            onChange={onChange}
          />
        </span>

        <div className="form-group">
          <input
            type="number"
            min="1"
            placeholder="Quantity"
            name="quantity"
            value={quantity}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Add Order" />
      </form>
    </div>
  );
};

export default connect(null, { addProduct })(OrderForm);
