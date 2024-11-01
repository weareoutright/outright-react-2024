import React from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import TeamPageContent from "./TeamPageContent";

const TeamPage = () => {
  return (
    <div className="WorkPage TeamPage" id="page-team">
      <WorkGalleryUtility />
      <div className="TeamPageContent">
        <TeamPageContent />
      </div>
    </div>
  );
};

export default TeamPage;
