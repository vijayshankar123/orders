import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../../actions/productAction";

const EditForm = ({ current, updateProduct, history }) => {
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
    const upd = {
      id: current._id,
      customer_name,
      customer_email,
      product,
      quantity
    };
    updateProduct(upd, history);
    setFormData({
      customer_name: "",
      customer_email: "",
      product: "Product 1",
      quantity: ""
    });
  };

  useEffect(
    () => {
      if (current !== null) {
        setFormData(current);
      }
    },
    [current]
  );
  return (
    <div className="container">
      <h1 className="large text-primary">Edit your Order</h1>
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
        <input type="submit" className="btn btn-primary" value="Edit Order" />
      </form>
    </div>
  );
};

const mapStatToProps = state => ({
  current: state.products.current
});

export default connect(mapStatToProps, { updateProduct })(EditForm);
