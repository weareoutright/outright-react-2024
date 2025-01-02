"use client";

import React, { useState, useEffect, useRef } from "react";
import PaneOuter from "./components/PaneOuter.jsx";
import Utility from "./components/Utility.jsx";
import HeroPane from "./panes/HeroPane.jsx";
import { pane as YouTubePane } from "./clients/YouTubePaneProps.jsx";
import { pane as HeroPaneProps } from "./panes/HeroPaneProps.jsx";
import { pane as RtcPaneProps } from "./clients/RtcPaneProps.jsx";
import { pane as MarriottPaneProps } from "./clients/MarriottPaneProps.jsx";
import { pane as ToaPaneProps } from "./clients/ToaPaneProps.jsx";
import { pane as GNRTPaneProps } from "./clients/GnrtPaneProps.jsx";
import { pane as SeeMoreWorkPaneProps } from "./panes/SeeMoreWorkPaneProps.jsx";
import { pane as ContactPaneProps } from "./panes/ContactPaneProps.jsx";
import { pane as OurClientsPaneProps } from "./panes/OurClientsPaneProps.jsx";
import { pane as ServicesPaneProps } from "./panes/ServicesPaneProps.jsx";
import { pane as AboutPaneProps } from "./panes/AboutPaneProps.jsx";

export default function Home() {
  const [siteHeadlineOpacity, setSiteHeadlineOpacity] = useState(1);
  const [siteHeadlineDisplay, setSiteHidelineDisplay] = useState("block");
  const [privacyHeadlineOpacity, setPrivacyHeadlineOpacity] = useState(1);
  const [scrollbarColor, setScrollbarColor] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const scrollPos = containerRef.current?.scrollTop || 0;
      const newOpacity = Math.max(1 - scrollPos / maxScroll, 0);
      setSiteHeadlineOpacity(newOpacity);
      setPrivacyHeadlineOpacity(newOpacity);
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
  const [currentOrder, setCurrentOrder] = useState("light-scrollbar");

  // Refs for the components you want to observe
  const heroPaneRef = useRef(null);
  const youtubeRef = useRef(null);
  const rtcRef = useRef(null);
  const marriottRef = useRef(null);
  const toaRef = useRef(null);
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
            const { waypoint, order, scrollbar } = entry.target.dataset;
            const hasWhiteBg = "white" === scrollbar;
            const hasDarkBg = "black" === scrollbar;
            const hasImgBg = "img" === scrollbar;
            const hasChartreuseBg = "chartreuse" === scrollbar;

            setCurrentWaypoint(waypoint);
            setCurrentOrder(order);

            if (hasChartreuseBg)
              setScrollbarColor("chartreuse-inverted-scrollbar");
            if (hasWhiteBg) setScrollbarColor("light-scrollbar");
            if (hasDarkBg) setScrollbarColor("dark-scrollbar");
            if (hasImgBg) setScrollbarColor("img-scrollbar");

            if (entry.target.dataset.waypoint === "Contact") {
              setSiteHidelineDisplay("none");
            } else {
              setSiteHidelineDisplay("block");
            }
          }
        });
      },
      { threshold: 0.5 } // Component must be at least ##% visible
    );

    const hero = heroPaneRef.current;
    const youtube = youtubeRef.current;
    const rtc = rtcRef.current;
    const marriott = marriottRef.current;
    const toa = toaRef.current;
    const gnrt = gnrtRef.current;
    const seeMoreWork = seeMoreWorkRef.current;
    const ourClients = ourClientsRef.current;
    const about = aboutRef.current;
    const services = servicesRef.current;
    const contact = contactRef.current;

    // Observe components
    if (hero) observer.observe(hero);
    if (youtube) observer.observe(youtube);
    if (rtc) observer.observe(rtc);
    if (marriott) observer.observe(marriott);
    if (toa) observer.observe(toa);
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
      if (rtc) observer.observe(rtc);
      if (marriott) observer.observe(marriott);
      if (toa) observer.observe(toa);
      if (gnrt) observer.observe(gnrt);
      if (seeMoreWork) observer.observe(seeMoreWork);
      if (ourClients) observer.observe(ourClients);
      if (about) observer.observe(about);
      if (services) observer.observe(services);
      if (contact) observer.observe(contact);
    };
  }, []);

  return (
    <div className={`Home ${scrollbarColor}`} ref={containerRef}>
      {/* Utility component receives dynamic waypoint and order */}
      <Utility
        waypoint={currentWaypoint}
        order={currentOrder}
        siteHeadlineOpacity={siteHeadlineOpacity}
        siteHeadlineDisplay={siteHeadlineDisplay}
        privacyPolicyOpacity={privacyHeadlineOpacity}
      />

      {/* HeroPane observed */}
      <div
        ref={heroPaneRef}
        data-waypoint={HeroPaneProps.waypoint}
        data-order={HeroPaneProps.order}
        data-scrollbar={HeroPaneProps.background}
      >
        <HeroPane />
      </div>

      {/* PaneOuter observed */}
      <div
        ref={youtubeRef}
        data-waypoint={YouTubePane.waypoint}
        data-order={YouTubePane.order}
        data-scrollbar={YouTubePane.background}
        id="featured"
      >
        <PaneOuter pane={YouTubePane} />
      </div>
      <div
        ref={rtcRef}
        data-waypoint={RtcPaneProps.waypoint}
        data-order={RtcPaneProps.order}
        data-scrollbar={RtcPaneProps.background}
      >
        <PaneOuter pane={RtcPaneProps} />
      </div>
      <div
        ref={marriottRef}
        data-waypoint={MarriottPaneProps.waypoint}
        data-order={MarriottPaneProps.order}
        data-scrollbar={MarriottPaneProps.background}
      >
        <PaneOuter pane={MarriottPaneProps} />
      </div>
      <div
        ref={toaRef}
        data-waypoint={ToaPaneProps.waypoint}
        data-order={ToaPaneProps.order}
        data-scrollbar={ToaPaneProps.background}
      >
        <PaneOuter pane={ToaPaneProps} />
      </div>
      <div
        ref={gnrtRef}
        data-waypoint={GNRTPaneProps.waypoint}
        data-order={GNRTPaneProps.order}
        data-scrollbar={GNRTPaneProps.background}
      >
        <PaneOuter pane={GNRTPaneProps} />
      </div>

      <div
        ref={seeMoreWorkRef}
        data-waypoint={SeeMoreWorkPaneProps.waypoint}
        data-order={SeeMoreWorkPaneProps.order}
        data-scrollbar={SeeMoreWorkPaneProps.background}
      >
        <PaneOuter pane={SeeMoreWorkPaneProps} />
      </div>
      <div
        ref={ourClientsRef}
        data-waypoint={OurClientsPaneProps.waypoint}
        data-order={OurClientsPaneProps.order}
        data-scrollbar={OurClientsPaneProps.background}
        id="clients"
      >
        <PaneOuter pane={OurClientsPaneProps} />
      </div>
      <div
        ref={aboutRef}
        data-waypoint={AboutPaneProps.waypoint}
        data-order={AboutPaneProps.order}
        data-scrollbar={AboutPaneProps.background}
        id="who-we-are"
      >
        <PaneOuter pane={AboutPaneProps} />
      </div>
      <div
        ref={servicesRef}
        data-waypoint={ServicesPaneProps.waypoint}
        data-order={ServicesPaneProps.order}
        data-scrollbar={ServicesPaneProps.background}
        id="approach"
      >
        <PaneOuter pane={ServicesPaneProps} />
      </div>
      <div
        ref={contactRef}
        data-waypoint={ContactPaneProps.waypoint}
        data-order={ContactPaneProps.order}
        data-scrollbar={ContactPaneProps.background}
      >
        <PaneOuter pane={ContactPaneProps} currentWaypoint={currentWaypoint} />
      </div>
    </div>
  );
}
