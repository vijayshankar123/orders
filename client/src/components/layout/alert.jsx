import React from "react";
import { connect } from "react-redux";
const Alert = ({ alert }) => {
  return (
    alert !== null &&
    alert.length > 0 &&
    alert.map(alert => (
      <div
        style={{ position: "fixed", zIndex: "1", top: "2rem", right: "20rem" }}
        key={alert.id}
        className={"alert alert-" + alert.alertType}
      >
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alert);
