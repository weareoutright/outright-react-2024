import React from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import ZoomGallery from "./ZoomGallery";

const ZoomPage = () => {
  return (
    <div className="WorkPage ZoomPage">
      <WorkGalleryUtility />
      <ZoomGallery />
    </div>
  );
};

export default ZoomPage;
