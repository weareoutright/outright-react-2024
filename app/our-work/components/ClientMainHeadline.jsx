import React from "react";

const ClientMainHeadline = ({ mainHeadline, waypoint }) => {
  return (
    <div className="ClientMainHeadline" data-waypoint={waypoint}>
      {mainHeadline}
    </div>
  );
};

export default ClientMainHeadline;
