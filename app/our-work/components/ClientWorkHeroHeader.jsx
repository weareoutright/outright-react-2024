import React from "react";

const ClientWorkHeroHeader = ({ heroHeader, waypoint }) => {
  const { client_full_name, project_title, tags } = heroHeader;
  return (
    <div className="ClientWorkHeroHeader" data-waypoint={waypoint}>
      <h5>{client_full_name}</h5>
      <h3>{project_title}</h3>
      <div className="project-tags">
        {tags?.map((tag) => {
          return <div className="tag-pill">{tag.toUpperCase()}</div>;
        })}
      </div>
    </div>
  );
};

export default ClientWorkHeroHeader;
