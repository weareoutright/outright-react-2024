import React from "react";
import Image from "next/image";

const ClientSpotlight = ({ clientSpotlight, waypoint }) => {
  return (
    <div className="ClientSpotlight" data-waypoint={waypoint}>
      <Image src={clientSpotlight} />
    </div>
  );
};

export default ClientSpotlight;
