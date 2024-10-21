import React from "react";

const ClientMainHeadline = ({ mainHeadline, waypoint }) => {
  return (
    <div className="ClientMainHeadline" data-waypoint={waypoint}>
      <div className="main-headline-text">{mainHeadline}</div>
    </div>
  );
};

export default ClientMainHeadline;
