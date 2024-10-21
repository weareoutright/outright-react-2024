import React from "react";
import Image from "next/image";
import Link from "next/link";
import PREV_ARROW from "./prev-arrow.png";
import NEXT_ARROW from "./next-arrow.png";

export const PrevNextBottomNav = ({ prevPage, nextPage }) => {
  return (
    <div className="PrevNextBottomNav">
      <Link className="prev-btn" href={prevPage}>
        <Image src={PREV_ARROW} alt="" />
        PREVIOUS
      </Link>
      <Link className="next-btn" href={nextPage}>
        NEXT
        <Image src={NEXT_ARROW} alt="" />
      </Link>
    </div>
  );
};
