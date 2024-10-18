"use client";

import WorkGalleryUtility from "@/app/components/WorkGalleryUtility";
import React, { useState, useRef, useEffect } from "react";
import ClientWorkHero from "./components/ClientWorkHero";
import { pane as ContactPaneProps } from "../panes/ContactPaneProps";
import PaneOuter from "@/app/components/PaneOuter";
import ClientWorkHeroHeader from "./components/ClientWorkHeroHeader";
import ClientWorkBento from "./components/ClientWorkBento";
import ClientQuote from "./components/ClientQuote";
import ClientSpotlight from "./components/ClientSpotlight";
import ClientProjectOverview from "./components/ClientProjectOverview";

const ClientWorkPageLayout = () => {
  // State to track currently visible component's waypoint and order
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [siteHeadlineDisplay, setSiteHidelineDisplay] = useState("block");
  const [spinnerYPos, setSpinnerYPos] = useState("50%");
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);
  const containerRef = useRef(null);

  // Refs for the components you want to observe
  const clientWorkHeroRef = useRef(null);
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
          }
        });
      },
      { threshold: 0.25 } // Component must be at least ##% visible
    );

    const clientWorkHero = clientWorkHeroRef.current;
    const contact = contactRef.current;

    // Observe components
    if (clientWorkHero) observer.observe(clientWorkHero);
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (clientWorkHero) observer.observe(clientWorkHero);
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
      <ClientWorkHero />
      <ClientWorkHeroHeader />
      <div className="main-headline"></div>
      <ClientWorkBento />
      <ClientQuote />
      <div className="full-width-img"></div>
      <ClientSpotlight />
      <ClientProjectOverview />
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

export default ClientWorkPageLayout;
