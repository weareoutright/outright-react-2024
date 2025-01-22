import React from "react";

const ClientProjectOverview = ({ projectOverview, waypoint, awards }) => {
  console.log(awards);
  return (
    <div className="ClientProjectOverview" data-waypoint={waypoint}>
      {projectOverview}
      {awards !== null && (
        <div className="awards-section">
          <h3>Awards and Accolades</h3>
          <div className="awards">
            {awards?.map((award) => {
              return (
                <div key={award} className="award-name">
                  {award}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientProjectOverview;
