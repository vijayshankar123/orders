import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
  getUser
} from "../../actions/productAction";
import Spinner from "../layout/Spinner";
import ProductItem from "./ProductItem";
const Home = ({
  getUser,
  history,
  products: { loading, products, user },
  deleteProduct,
  getProducts
}) => {
  if (user == "") {
    history.push("/");
  }
  return (
    <div className="back">
      {loading && products === null ? (
        <Spinner />
      ) : (
        <div className="row container">
          <div className="col-sm-4">
            {user && (
              <div
                style={{
                  margin: "10%",
                  padding: "10px",
                  textAlign: "center"
                }}
              >
                <h3 style={{ color: "blue" }}>{user.name}</h3>
                <img style={{ borderRadius: "50%" }} src={user.image} alt="" />
                <p style={{ marginTop: "8px" }}>
                  <strong> {user.email}</strong>
                </p>
              </div>
            )}
          </div>
          <div className="col-sm-8 ">
            <div className="mb-5">
              <span style={{ color: "white" }}> Orders</span>
              <span style={{ float: "right" }}>
                <Link style={{ color: "white" }} to="/order">
                  Create Order <i className="fas fa-plus" />
                </Link>
              </span>
              {products !== null &&
                !loading &&
                products.map(item => (
                  <ProductItem key={item._id} item={item} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, {
  getUser,
  deleteProduct,
  getProducts
})(Home);
