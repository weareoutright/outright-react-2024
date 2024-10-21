import React from "react";
import Image from "next/image";

const ClientWorkBento = ({ bentoImages, waypoint }) => {
  const { top, bottom_left, bottom_mid, bottom_right } = bentoImages;
  return (
    <div className="ClientWorkBento" data-waypoint={waypoint}>
      <Image className="top" src={top} alt="" width={"100%"} height={"100%"} />
      <Image
        className="bottom-left"
        src={bottom_left}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <div className="bottom-right">
        <Image
          className="bottom-right-top"
          src={bottom_mid}
          alt=""
          width={"100%"}
          height={"100%"}
        />
        <Image
          className="bottom-right-bottom"
          src={bottom_right}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default ClientWorkBento;
