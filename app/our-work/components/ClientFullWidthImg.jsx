import React from "react";
import Image from "next/image";

const ClientFullWidthImg = ({ fullWidthImg, waypoint }) => {
  return (
    <div className="ClientFullWidthImg" data-waypoint={waypoint}>
      <Image src={fullWidthImg} alt="" />
    </div>
  );
};

export default ClientFullWidthImg;
