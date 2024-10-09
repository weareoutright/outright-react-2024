import React from "react";

const Spinner = ({ classes, id, text }) => {
  return (
    <div className={`spinner ${classes}`} id={id}>
      <div className="spinner-circle"></div>
      <div className="spinner-contrast">
        <div className="spinner-circle-contrast"></div>
      </div>
      <div className="spinner-content">{text}</div>
    </div>
  );
};

export default Spinner;
