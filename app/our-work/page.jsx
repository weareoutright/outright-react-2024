"use client";

import React, { useState, useEffect, useRef } from "react";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import Gallery from "./Gallery";
import PaneOuter from "../components/PaneOuter";
import WorkGalleryHero from "./WorkGalleryHero";
import { pane as ContactPaneProps } from "../panes/ContactPaneProps.jsx";
import { pane as WorkGalleryHeroProps } from "./WorkGalleryHeroProps";

const WorkPage = () => {
  // State to track currently visible component's waypoint and order
  const [scrollbarColor, setScrollbarColor] = useState("");
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);

  const workPageContainerRef = useRef(null);

  // Refs for the components you want to observe
  const heroPaneRef = useRef(null);
  const workGalleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { waypoint, order, scrollbar } = entry.target.dataset;
            const hasChartreuseBg = "chartreuse" === scrollbar;
            setCurrentWaypoint(waypoint);
            setCurrentOrder(order);

            if (hasChartreuseBg)
              setScrollbarColor("chartreuse-inverted-scrollbar");
            else setScrollbarColor("light-scrollbar");

            if (entry.target.dataset.waypoint === "Contact") {
              setSpinnerOpacity(1);
            }

            if (entry.target.dataset.waypoint !== "Contact") {
              setSpinnerOpacity(0);
            }
          }
        });
      },
      { threshold: 0.1 } // Component must be at least ##% visible
    );

    const hero = heroPaneRef.current;
    const workGallery = workGalleryRef.current;
    const contact = contactRef.current;

    // Observe components
    if (hero) observer.observe(hero);
    if (workGallery) {
      const children = workGallery.querySelectorAll("[data-waypoint]");
      children.forEach((child) => observer.observe(child));
    }
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (hero) observer.unobserve(hero);
      if (workGallery) {
        const children = workGallery.querySelectorAll("[data-waypoint]");
        children.forEach((child) => observer.unobserve(child));
      }
      if (contact) observer.unobserve(contact);
    };
  }, []);

  return (
    <div className={`WorkPage ${scrollbarColor}`} ref={workPageContainerRef}>
      <WorkGalleryUtility
        waypoint={currentWaypoint}
        order={currentOrder}
        spinnerOpacity={spinnerOpacity}
      />
      <div
        ref={heroPaneRef}
        data-waypoint={WorkGalleryHeroProps.waypoint}
        data-order={WorkGalleryHeroProps.order}
        data-scrollbar="chartreuse"
      >
        <WorkGalleryHero pane={WorkGalleryHeroProps} />
      </div>
      <div
        ref={workGalleryRef}
        data-waypoint={WorkGalleryHeroProps.galleryWaypoint}
        className="work-page-gallery"
      >
        <Gallery waypoint={WorkGalleryHeroProps.galleryWaypoint} />
      </div>
      <div
        ref={contactRef}
        data-waypoint={ContactPaneProps.waypoint}
        data-order={ContactPaneProps.order}
      >
        <PaneOuter
          pane={ContactPaneProps}
          spinnerOpacity={spinnerOpacity}
          currentWaypoint={currentWaypoint}
        />
      </div>
    </div>
  );
};

export default WorkPage;
