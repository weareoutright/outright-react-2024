"use client";

import React, { useState, useEffect, useRef } from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import Gallery from "./Gallery";
import { pane as ContactPaneProps } from "../panes/ContactPaneProps.js";
import PaneOuter from "../components/PaneOuter";
import WorkPageHero from "./WorkPageHero";

import { pane as WorkPageHeroProps } from "./WorkPageHeroProps";

const WorkPage = () => {
  // State to track currently visible component's waypoint and order
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [siteHeadlineDisplay, setSiteHidelineDisplay] = useState("block");
  const [spinnerYPos, setSpinnerYPos] = useState("50%");
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);
  const containerRef = useRef(null);

  // Refs for the components you want to observe
  const heroPaneRef = useRef(null);
  const workGalleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { waypoint, order } = entry.target.dataset;
            setCurrentWaypoint(waypoint);
            setCurrentOrder(order);

            if (entry.target.dataset.waypoint === "Contact") {
              setSpinnerOpacity(1);
              setSiteHidelineDisplay("none");
            } else {
              setSpinnerOpacity(0);
            }

            if (entry.target.dataset.waypoint === "Work Page") {
              setSiteHidelineDisplay("block");
            }

            if (entry.target.dataset.waypoint === "Gallery") {
              setSiteHidelineDisplay("none");
            }
          }
        });
      },
      { threshold: 0.25 } // Component must be at least ##% visible
    );

    // Observe components
    if (heroPaneRef.current) observer.observe(heroPaneRef.current);
    if (workGalleryRef.current) observer.observe(workGalleryRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup on unmount
    return () => {
      if (heroPaneRef.current) observer.observe(heroPaneRef.current);
      if (workGalleryRef.current) observer.observe(workGalleryRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
    };
  }, []);

  return (
    <>
      <div className="WorkPage" ref={containerRef}>
        <WorkGalleryUtility
          waypoint={currentWaypoint}
          order={currentOrder}
          siteHeadlineOpacity={siteHeadlineOpacity}
          siteHeadlineDisplay={siteHeadlineDisplay}
          spinnerOpacity={spinnerOpacity}
        />
        <div
          ref={heroPaneRef}
          data-waypoint={WorkPageHeroProps.waypoint}
          data-order={WorkPageHeroProps.order}
        >
          <WorkPageHero pane={WorkPageHeroProps} />
        </div>
        <div
          className="work-page-gallery"
          ref={workGalleryRef}
          data-waypoint={WorkPageHeroProps.galleryWaypoint}
        >
          <Gallery />
        </div>
        <div
          ref={contactRef}
          data-waypoint={ContactPaneProps.waypoint}
          data-order={ContactPaneProps.order}
        >
          <PaneOuter
            pane={ContactPaneProps}
            spinnerOpacity={spinnerOpacity}
            spinnerYPos={spinnerYPos}
          />
        </div>
      </div>
    </>
  );
};

export default WorkPage;
