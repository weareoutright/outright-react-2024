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
import ClientMainHeadline from "./components/ClientMainHeadline";
import ClientFullWidthImg from "./components/ClientFullWidthImg";
import { PrevNextBottomNav } from "./components/PrevNextBottomNav";

const ClientWorkPageLayout = ({ clientProject }) => {
  // State to track currently visible component's waypoint and order
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [siteHeadlineDisplay, setSiteHidelineDisplay] = useState("block");
  const [spinnerYPos, setSpinnerYPos] = useState("50%");
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);
  const containerRef = useRef(null);

  // Refs for the components you want to observe
  const pageComponentsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { waypoint, order } = entry.target.dataset;
            setCurrentWaypoint(waypoint);
            setCurrentOrder(order);

            console.log(entry.target.dataset);

            if (entry.target.dataset.waypoint === "Contact") {
              setSpinnerOpacity(1);
              setSiteHidelineDisplay("none");
            }

            if (entry.target.dataset.waypoint !== "Contact") {
              setSpinnerOpacity(0);
            }
          }
        });
      },
      { threshold: 0.25 } // Component must be at least ##% visible
    );

    const pageComponents = pageComponentsRef.current;
    const contact = contactRef.current;

    // Observe components
    if (pageComponents) {
      const children = pageComponents.querySelectorAll("[data-waypoint]"); // Select all elements with data-waypoint attribute
      children.forEach((child) => observer.observe(child)); // Observe each child element
    }
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (pageComponents) {
        const children = pageComponents.querySelectorAll("[data-waypoint]"); // Select all elements with data-waypoint attribute
        children.forEach((child) => observer.observe(child)); // Observe each child element
      }
      if (contact) observer.unobserve(contact);
    };
  }, []);

  const {
    hero,
    main_headline,
    bento_images,
    client_quote,
    full_width_img,
    client_spotlight,
    project_overview,
    prev_page,
    next_page,
  } = clientProject;

  return (
    <div className="WorkPage" ref={containerRef}>
      <WorkGalleryUtility
        waypoint={currentWaypoint}
        order={currentOrder}
        siteHeadlineOpacity={siteHeadlineOpacity}
        siteHeadlineDisplay={siteHeadlineDisplay}
        spinnerOpacity={spinnerOpacity}
      />
      <div ref={pageComponentsRef} data-waypoint="WorkPageComponent">
        <ClientWorkHero
          heroBg={hero.hero_bg_img}
          waypoint="WorkPageComponent"
        />
        <ClientWorkHeroHeader
          heroHeader={hero.header}
          waypoint="WorkPageComponent"
        />
        <ClientMainHeadline
          mainHeadline={main_headline}
          waypoint="WorkPageComponent"
        />
        <ClientWorkBento
          bentoImages={bento_images}
          waypoint="WorkPageComponent"
        />
        <ClientQuote clientQuote={client_quote} waypoint="WorkPageComponent" />
        <ClientFullWidthImg
          fullWidthImg={full_width_img}
          waypoint="WorkPageComponent"
        />
        <ClientSpotlight
          clientSpotlight={client_spotlight}
          waypoint="WorkPageComponent"
        />
        <ClientProjectOverview
          projectOverview={project_overview}
          waypoint="WorkPageComponent"
        />
        <PrevNextBottomNav
          prevPage={prev_page}
          nextPage={next_page}
          waypoint="WorkPageComponent"
        />
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

export default ClientWorkPageLayout;
