import React from "react";
import Image from "next/image";
import PREV_ARROW from "./prev-arrow.png";
import NEXT_ARROW from "./next-arrow.png";

export const PrevNextBottomNav = ({ prevPage, nextPage, handleNavigation }) => {
  return (
    <div className="PrevNextBottomNav">
      {prevPage && (
        <a
          href={prevPage === "/" ? prevPage : `/our-work${prevPage.slug}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            handleNavigation(
              prevPage === "/" ? prevPage : `/our-work${prevPage.slug}`,
              1000
            );
          }}
          className="prev-btn"
        >
          <Image
            src={PREV_ARROW}
            alt="Previous"
            width={"100%"}
            height={"100%"}
          />
          PREVIOUS
        </a>
      )}

      {nextPage && (
        <a
          href={nextPage === "/" ? nextPage : `/our-work${nextPage.slug}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            handleNavigation(
              nextPage === "/" ? nextPage : `/our-work${nextPage.slug}`,
              -1000
            );
          }}
          className="next-btn"
        >
          NEXT
          <Image src={NEXT_ARROW} alt="Next" width={"100%"} height={"100%"} />
        </a>
      )}
    </div>
  );
};
