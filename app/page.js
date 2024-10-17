"use client";

import React, { useState, useEffect, useRef } from "react";
import PaneOuter from "./components/PaneOuter";
import Utility from "./components/Utility";
import HeroPane from "./panes/HeroPane.jsx";
import { pane as YouTubePane } from "./clients/YouTubePaneProps.js";
import { pane as HeroPaneProps } from "./panes/HeroPaneProps.js";
import { pane as GNRTPaneProps } from "./clients/GnrtPaneProps.js";
import { pane as SeeMoreWorkPaneProps } from "./panes/SeeMoreWorkPaneProps.js";
import { pane as ContactPaneProps } from "./panes/ContactPaneProps.js";
import { pane as OurClientsPaneProps } from "./panes/OurClientsPaneProps.js";
import { pane as ServicesPaneProps } from "./panes/ServicesPaneProps.js";
import { pane as AboutPaneProps } from "./panes/AboutPaneProps.js";

export default function Home() {
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [siteHeadlineDisplay, setSiteHidelineDisplay] = useState("block");
  const [spinnerYPos, setSpinnerYPos] = useState("-50%");
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
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
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
              setSiteHidelineDisplay("block");
            }
          }
        });
      },
      { threshold: 0.25 } // Component must be at least ##% visible
    );

    const hero = heroPaneRef.current;
    const youtube = youtubeRef.current;
    const gnrt = gnrtRef.current;
    const seeMoreWork = seeMoreWorkRef.current;
    const ourClients = ourClientsRef.current;
    const about = aboutRef.current;
    const services = servicesRef.current;
    const contact = contactRef.current;

    // Observe components
    if (hero) observer.observe(hero);
    if (youtube) observer.observe(youtube);
    if (gnrt) observer.observe(gnrt);
    if (seeMoreWork) observer.observe(seeMoreWork);
    if (ourClients) observer.observe(ourClients);
    if (about) observer.observe(about);
    if (services) observer.observe(services);
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (hero) observer.observe(hero);
      if (youtube) observer.observe(youtube);
      if (gnrt) observer.observe(gnrt);
      if (seeMoreWork) observer.observe(seeMoreWork);
      if (ourClients) observer.observe(ourClients);
      if (about) observer.observe(about);
      if (services) observer.observe(services);
      if (contact) observer.observe(contact);
    };
  }, []);

  return (
    <div className="Home" ref={containerRef}>
      {/* Utility component receives dynamic waypoint and order */}
      <Utility
        waypoint={currentWaypoint}
        order={currentOrder}
        siteHeadlineOpacity={siteHeadlineOpacity}
        siteHeadlineDisplay={siteHeadlineDisplay}
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
        ref={aboutRef}
        data-waypoint={AboutPaneProps.waypoint}
        data-order={AboutPaneProps.order}
      >
        <PaneOuter pane={AboutPaneProps} />
      </div>
      <div
        ref={servicesRef}
        data-waypoint={ServicesPaneProps.waypoint}
        data-order={ServicesPaneProps.order}
      >
        <PaneOuter pane={ServicesPaneProps} />
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
}
