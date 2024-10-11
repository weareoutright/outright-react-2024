"use client";

import React, { useState, useEffect, useRef } from "react";
import PaneOuter from "./components/PaneOuter";
import Utility from "./components/Utility";
import { pane as YouTubePane } from "./clients/YouTubePaneProps.js";
import HeroPane from "./panes/HeroPane.jsx";
import { pane as HeroPaneProps } from "./panes/HeroPaneProps.js";

export default function Home() {
  // State to track currently visible component's waypoint and order
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");

  // Refs for the components you want to observe
  const heroPaneRef = useRef(null);
  const paneOuterRef1 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { waypoint, order } = entry.target.dataset;
            setCurrentWaypoint(waypoint);
            setCurrentOrder(order);
          }
        });
      },
      { threshold: 0.5 } // Component must be at least 50% visible
    );

    // Observe components
    if (heroPaneRef.current) observer.observe(heroPaneRef.current);
    if (paneOuterRef1.current) observer.observe(paneOuterRef1.current);

    // Cleanup on unmount
    return () => {
      if (heroPaneRef.current) observer.unobserve(heroPaneRef.current);
      if (paneOuterRef1.current) observer.unobserve(paneOuterRef1.current);
    };
  }, []);

  return (
    <>
      {/* Utility component receives dynamic waypoint and order */}
      <Utility waypoint={currentWaypoint} order={currentOrder} />

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
        ref={paneOuterRef1}
        data-waypoint={YouTubePane.waypoint}
        data-order={YouTubePane.order}
      >
        <PaneOuter pane={YouTubePane} />
      </div>
    </>
  );
}
