"use client";

import React, { useState, useEffect, useRef } from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import Gallery from "./Gallery";
import PaneOuter from "../components/PaneOuter";
import WorkGalleryHero from "./WorkGalleryHero";
import { pane as ContactPaneProps } from "../panes/ContactPaneProps.js";
import { pane as WorkGalleryHeroProps } from "./WorkGalleryHeroProps";

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

    const hero = heroPaneRef.current;
    const workGallery = workGalleryRef.current;
    const contact = contactRef.current;

    // Observe components
    if (hero) observer.observe(hero);
    if (workGallery) observer.observe(workGallery);
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (hero) observer.observe(hero);
      if (workGallery) observer.observe(workGallery);
      if (contact) observer.observe(contact);
    };
  }, []);

  return (
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
        data-waypoint={WorkGalleryHeroProps.waypoint}
        data-order={WorkGalleryHeroProps.order}
      >
        <WorkGalleryHero pane={WorkGalleryHeroProps} />
      </div>
      <div
        className="work-page-gallery"
        ref={workGalleryRef}
        data-waypoint={WorkGalleryHeroProps.galleryWaypoint}
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
  );
};

export default WorkPage;
