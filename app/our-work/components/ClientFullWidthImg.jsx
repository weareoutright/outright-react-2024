import React from "react";
import Image from "next/image";

const ClientFullWidthImg = ({ fullWidthImg, waypoint }) => {
  return (
    <div className="ClientFullWidthImg" data-waypoint={waypoint}>
      <Image src={fullWidthImg} alt="" width={"100%"} height={"100%"} />
    </div>
  );
};

export default ClientFullWidthImg;
