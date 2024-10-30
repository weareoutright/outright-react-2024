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
import PageTransition from "../components/PageTransition";
import { useRouter } from "next/navigation";

const ClientWorkPageLayout = ({ clientProject }) => {
  const [currentWaypoint, setCurrentWaypoint] = useState("");

  // State for resolved prev_page and next_page
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [xOffset, setXOffset] = useState(1000);

  const router = useRouter();
  const clientWorkPageContainerRef = useRef(null);
  const pageComponentsRef = useRef(null);
  const contactRef = useRef(null);

  const {
    hero,
    main_headline,
    bento_images,
    client_quote,
    full_width_img,
    client_spotlight,
    project_overview,
    _prev_page,
    _next_page,
  } = clientProject;

  const handleNavigation = (slug, xOffsetDirection) => {
    setXOffset(xOffsetDirection); // Update direction
    router.push(slug);
  };

  useEffect(() => {
    // Resolve async prev_page and next_page
    const fetchPrevNextPages = async () => {
      if (_prev_page === "/") setPrevPage("/");
      if (_next_page === "/") setNextPage("/");

      if (_prev_page !== "/") {
        const resolvedPrevPage = await _prev_page();
        setPrevPage(resolvedPrevPage);
      }
      if (_next_page !== "/") {
        const resolvedNextPage = await _next_page();
        setNextPage(resolvedNextPage);
      }
    };
    fetchPrevNextPages();
  }, [clientProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { waypoint } = entry.target.dataset;
            setCurrentWaypoint(waypoint);
          }
        });
      },
      { threshold: 0.75 } // Component must be at least 75% visible
    );

    const pageComponents = pageComponentsRef.current;
    const contact = contactRef.current;

    // Observe components
    if (pageComponents) {
      const children = pageComponents.querySelectorAll("[data-waypoint]");
      children.forEach((child) => observer.observe(child));
    }
    if (contact) observer.observe(contact);

    // Cleanup on unmount
    return () => {
      if (pageComponents) {
        const children = pageComponents.querySelectorAll("[data-waypoint]");
        children.forEach((child) => observer.unobserve(child));
      }
      if (contact) observer.unobserve(contact);
    };
  }, []);

  return (
    <PageTransition page={hero.header.project_title} xOffset={xOffset}>
      <div className="ClientWorkPage" ref={clientWorkPageContainerRef}>
        <WorkGalleryUtility waypoint={currentWaypoint} />
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
          <ClientQuote
            clientQuote={client_quote}
            waypoint="WorkPageComponent"
          />
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
            prevPage={prevPage}
            nextPage={nextPage}
            waypoint="WorkPageComponent"
            handleNavigation={handleNavigation}
          />
        </div>
        <div
          ref={contactRef}
          data-waypoint={ContactPaneProps.waypoint}
          data-order={ContactPaneProps.order}
        >
          <PaneOuter
            pane={ContactPaneProps}
            currentWaypoint={currentWaypoint}
          />
        </div>
      </div>
    </PageTransition>
  );
};

export default ClientWorkPageLayout;
