"use client";

import LOGO_O from "../assets/logo-o.svg";
import { useState, useEffect } from "react";

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
    <div className="HeroPane" id="pane-hero">
      <h1 className="pane-title site-title">
        <span
          className="scrollImage"
          style={{ transform: `translateY(-${translateY}px)` }}
        >
          <LOGO_O />
        </span>
      </h1>
    </div>
  );
};

export default HeroPane;
