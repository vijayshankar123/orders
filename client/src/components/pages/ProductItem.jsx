import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct, setCurrent } from "../../actions/productAction";

const ProductItem = ({ item, deleteProduct, setCurrent }) => {
  const onDelete = () => {
    deleteProduct(item._id);
  };

  const onCurrent = () => {
    setCurrent(item);
  };

  return (
    <div className="card mb-4" style={{ borderRadius: "15px" }}>
      <div>
        <p className="text-center card-header" style={{ color: "blue" }}>
          <span style={{ float: "right" }}>
            <Link onClick={onDelete}>
              {" "}
              <i className="far fa-trash-alt" />
            </Link>
          </span>{" "}
          {item.customer_name}{" "}
          <span style={{ float: "left" }}>
            <Link onClick={onCurrent} to="/editorder">
              <i className="fas fa-user-edit" />
            </Link>
          </span>
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Email :</strong> {item.customer_email}
          </li>
          <li className="list-group-item">
            {" "}
            <strong>{item.product}</strong>
          </li>
          <li className="list-group-item">
            <strong>Quantity :</strong> {item.quantity}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default connect(null, { setCurrent, deleteProduct })(ProductItem);
