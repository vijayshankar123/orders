import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/productAction";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "orange" };
  }
  return { color: "white" };
};

const Navbar = ({ history, logoutUser, products: { user } }) => {
  const logout = () => {
    logoutUser();
  };
  return (
    <div>
      <ul className=" nav nav-tabs bg-secondary">
        {user == "" || user === null ? (
          <li className="nav-item">
            <a
              className="nav-link"
              style={isActive(history, "/login")}
              href="/auth/google"
            >
              Login
            </a>
          </li>
        ) : (
          <li className="nav-item">
            <Link
              onClick={logout}
              className="nav-link"
              style={isActive(history, "/")}
              to="/"
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  products: state.products
});
export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
