import React from "react";

const ClientProjectOverview = ({ projectOverview, waypoint }) => {
  return (
    <div className="ClientProjectOverview" data-waypoint={waypoint}>
      {projectOverview}
    </div>
  );
};

export default ClientProjectOverview;
