import React from "react";
import VideoGallery from "./VideoGallery";
import WorkGalleryUtility from "../components/WorkGalleryUtility";

const VideoPage = () => {
  return (
    <div className="WorkPage VideoPage">
      <WorkGalleryUtility />
      <VideoGallery />
    </div>
  );
};

export default VideoPage;
