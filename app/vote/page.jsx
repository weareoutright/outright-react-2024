import React from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import VoteGallery from "./VoteGallery";

const VotePage = () => {
  return (
    <div className="WorkPage VotePage">
      <WorkGalleryUtility />
      <VoteGallery />
    </div>
  );
};

export default VotePage;
