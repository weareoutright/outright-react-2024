"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import WorkGalleryUtility from "../components/WorkGalleryUtility";
import TeamPageContent from "./TeamPageContent";
import PaneOuter from "../components/PaneOuter";
import { pane as ContactPaneProps } from "../panes/ContactPaneProps.jsx";

const TeamPage = () => {
  const [scrollbarColor, setScrollbarColor] = useState("");
  const [currentWaypoint, setCurrentWaypoint] = useState("");
  const [currentOrder, setCurrentOrder] = useState("");
  const [spinnerOpacity, setSpinnerOpacity] = useState(0);

  const teamPageContainerRef = useRef(null);
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
      { threshold: 0.1 } // Component must be at least 10% visible
    );

    const teamPageContainer = teamPageContainerRef.current;
    const contact = contactRef.current;

    if (teamPageContainer) {
      const children = teamPageContainer.querySelectorAll("[data-waypoint]");
      children.forEach((child) => observer.observe(child));
    }
    if (contact) observer.observe(contact);

    return () => {
      if (teamPageContainer) {
        const children = teamPageContainer.querySelectorAll("[data-waypoint]");
        children.forEach((child) => observer.unobserve(child));
      }
      if (contact) observer.unobserve(contact);
    };
  }, []);

  useEffect(() => {
    document.title = "Meet The Team | Outright";
    document.description = "Meet the team @ Outright";
  }, []);

  return (
    <>
      <Head>
        <title>Meet The Team | Outright</title>
        <meta
          name="description"
          content="We are Outright. A creative agency making elevated creative for modern brands."
        />
        <meta property="og:title" content="Meet The Team | Outright" />
        <meta
          property="og:description"
          content="We are Outright. A creative agency making elevated creative for modern brands."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weareoutright.com/team" />
      </Head>
      <div
        className={`TeamPage WorkPage ${scrollbarColor}`}
        ref={teamPageContainerRef}
      >
        <WorkGalleryUtility
          waypoint={currentWaypoint}
          order={currentOrder}
          spinnerOpacity={spinnerOpacity}
        />
        <div
          className="TeamPageContent"
          ref={teamPageContainerRef}
          data-waypoint="TeamContent"
          data-order="07"
        >
          <TeamPageContent />
        </div>
        <div
          ref={contactRef}
          data-waypoint={ContactPaneProps.waypoint}
          data-order={ContactPaneProps.order}
          className={`TeamContact`}
        >
          <PaneOuter
            pane={ContactPaneProps}
            spinnerOpacity={spinnerOpacity}
            currentWaypoint={currentWaypoint}
          />
        </div>
      </div>
    </>
  );
};

export default TeamPage;
