"use client";

import React, { useState, useEffect, useRef } from "react";
import PaneOuter from "./components/PaneOuter";
import Utility from "./components/Utility";
import { pane as YouTubePane } from "./clients/YouTubePaneProps.js";
import HeroPane from "./panes/HeroPane.jsx";
import { pane as HeroPaneProps } from "./panes/HeroPaneProps.js";
import { pane as GNRTPaneProps } from "./clients/GnrtPaneProps.js";
import { pane as SeeMoreWorkPaneProps } from "./panes/SeeMoreWorkPaneProps.js";
import { pane as ContactPaneProps } from "./panes/ContactPaneProps.js";
import { pane as OurClientsPaneProps } from "./panes/OurClientsPaneProps.js";

export default function Home() {
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const scrollPos = containerRef.current?.scrollTop || 0;
      const newOpacity = Math.max(1 - scrollPos / maxScroll, 0);
      setSiteHeadlineOpacity(newOpacity);
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State to track currently visible component's waypoint and order
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");

  // Refs for the components you want to observe
  const heroPaneRef = useRef(null);
  const youtubeRef = useRef(null);
  const gnrtRef = useRef(null);
  const seeMoreWorkRef = useRef(null);
  const ourClientsRef = useRef(null);
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
            } else {
              setSpinnerOpacity(0);
            }
          }
        });
      },
      { threshold: 0.25 } // Component must be at least ##% visible
    );

    // Observe components
    if (heroPaneRef.current) observer.observe(heroPaneRef.current);
    if (youtubeRef.current) observer.observe(youtubeRef.current);
    if (gnrtRef.current) observer.observe(gnrtRef.current);
    if (seeMoreWorkRef.current) observer.observe(seeMoreWorkRef.current);
    if (ourClientsRef.current) observer.observe(ourClientsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup on unmount
    return () => {
      if (heroPaneRef.current) observer.unobserve(heroPaneRef.current);
      if (youtubeRef.current) observer.unobserve(youtubeRef.current);
      if (gnrtRef.current) observer.observe(gnrtRef.current);
      if (seeMoreWorkRef.current) observer.observe(seeMoreWorkRef.current);
      if (ourClientsRef.current) observer.observe(ourClientsRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
    };
  }, []);

  return (
    <div className="Home" ref={containerRef}>
      {/* Utility component receives dynamic waypoint and order */}
      <Utility
        waypoint={currentWaypoint}
        order={currentOrder}
        siteHeadlineOpacity={siteHeadlineOpacity}
        spinnerOpacity={spinnerOpacity}
      />

      {/* HeroPane observed */}
      <div
        ref={heroPaneRef}
        data-waypoint={HeroPaneProps.waypoint}
        data-order={HeroPaneProps.order}
      >
        <HeroPane />
      </div>

      {/* PaneOuter observed */}
      <div
        ref={youtubeRef}
        data-waypoint={YouTubePane.waypoint}
        data-order={YouTubePane.order}
      >
        <PaneOuter pane={YouTubePane} />
      </div>
      <div
        ref={gnrtRef}
        data-waypoint={GNRTPaneProps.waypoint}
        data-order={GNRTPaneProps.order}
      >
        <PaneOuter pane={GNRTPaneProps} />
      </div>

      <div
        ref={seeMoreWorkRef}
        data-waypoint={SeeMoreWorkPaneProps.waypoint}
        data-order={SeeMoreWorkPaneProps.order}
      >
        <PaneOuter pane={SeeMoreWorkPaneProps} />
      </div>
      <div
        ref={ourClientsRef}
        data-waypoint={OurClientsPaneProps.waypoint}
        data-order={OurClientsPaneProps.order}
      >
        <PaneOuter pane={OurClientsPaneProps} />
      </div>
      <div
        ref={contactRef}
        data-waypoint={ContactPaneProps.waypoint}
        data-order={ContactPaneProps.order}
      >
        <PaneOuter pane={ContactPaneProps} spinnerOpacity={spinnerOpacity} />
      </div>
    </div>
  );
}
