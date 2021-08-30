import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  if (alert !== null) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"></i> {alert.msg}
      </div>
    );
  }
  return null;
};

export default Alert;
