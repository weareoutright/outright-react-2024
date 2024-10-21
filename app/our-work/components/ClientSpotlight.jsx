import React from "react";
import Image from "next/image";

const ClientSpotlight = ({ clientSpotlight, waypoint }) => {
  return (
    <div className="ClientSpotlight" data-waypoint={waypoint}>
      <Image src={clientSpotlight} alt="" width={"100%"} height={"100%"} />
    </div>
  );
};

export default ClientSpotlight;
