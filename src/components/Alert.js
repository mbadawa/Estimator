import React from "react";
// This componenet will be used to show the alert message to the user
const Alert = ({ type, text }) => {
	return <div className={`alert alert-${type}`}>{text}</div>;
};

export default Alert;
