import React from "react";

const Spinner = ({ classes, id, text, spinnerOpacity }) => {
  return (
    <div
      className={`spinner ${classes}`}
      id={id}
      style={{ opacity: spinnerOpacity, transition: "200ms ease-in-out" }}
    >
      <div className="spinner-circle"></div>
      <div className="spinner-contrast">
        <div className="spinner-circle-contrast"></div>
      </div>
      <div className="spinner-content">{text}</div>
    </div>
  );
};

export default Spinner;
