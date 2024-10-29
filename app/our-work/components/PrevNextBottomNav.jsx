import React from "react";
import Image from "next/image";
import Link from "next/link";
import PREV_ARROW from "./prev-arrow.png";
import NEXT_ARROW from "./next-arrow.png";

export const PrevNextBottomNav = ({ prevPage, nextPage }) => {
  return (
    <div className="PrevNextBottomNav">
      {prevPage === "/" || prevPage !== null ? (
        <Link
          className="prev-btn"
          href={prevPage === "/" ? "/" : `/our-work${prevPage.slug}`}
        >
          <Image
            src={PREV_ARROW}
            alt="Previous"
            width={"100%"}
            height={"100%"}
          />
          PREVIOUS
        </Link>
      ) : (
        <div className="prev-btn">
          <Image
            src={PREV_ARROW}
            alt="Previous"
            width={"100%"}
            height={"100%"}
          />
          PREVIOUS
        </div>
      )}

      {nextPage === "/" || nextPage !== null ? (
        <Link className="next-btn" href={`/our-work${nextPage.slug}`}>
          NEXT
          <Image src={NEXT_ARROW} alt="Next" width={"100%"} height={"100%"} />
        </Link>
      ) : (
        <div className="next-btn">
          NEXT
          <Image src={NEXT_ARROW} alt="Next" width={"100%"} height={"100%"} />
        </div>
      )}
    </div>
  );
};
