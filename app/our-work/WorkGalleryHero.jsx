"use client";

import { useState, useEffect } from "react";
import CHEVRON_DOWN from "../assets/icon-chevron-down.svg";
import SCRIBBLE_LINE from "../assets/scribble-line-dark.svg";

const HeroPane = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const speed = 0.7; // Adjust this value to control the scrolling speed of the image
      setTranslateY(scrollPos * speed);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="HeroPane WorkPageHero" id="work-page-hero">
      <h2 className="pane-title site-title work-page-title">
        OUR{" "}
        <span className="underline">
          WORK.
          <SCRIBBLE_LINE />
        </span>
      </h2>
      <div className="work-page-headline page-utility-component page-utility-lower page-utility-center">
        <h1 className="site-headline">
          <span>Elevated creative for modern brands</span>
          <a href="#gallery">
            <CHEVRON_DOWN className="hero-chevron-down" />
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HeroPane;
