import React from "react";
import Image from "next/image";

const ClientWorkBento = ({ bentoImages, waypoint }) => {
  const { top, bottom_left, bottom_mid, bottom_right } = bentoImages;
  return (
    <div className="ClientWorkBento" data-waypoint={waypoint}>
      <Image className="top" src={top} alt="" />
      <Image className="bottom-left" src={bottom_left} alt="" />
      <Image className="bottom-mid" src={bottom_mid} alt="" />
      <Image className="bottom-right" src={bottom_right} alt="" />
    </div>
  );
};

export default ClientWorkBento;
