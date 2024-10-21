import React from "react";
import Image from "next/image";

const ClientWorkHero = ({ heroBg, waypoint }) => {
  return (
    <div className="ClientWorkHero" data-waypoint={waypoint}>
      <Image src={heroBg} alt="" width={"100%"} height={"100%"} />
    </div>
  );
};

export default ClientWorkHero;
