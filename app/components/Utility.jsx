"use client";

import React from "react";
import Image from "next/image";
import TitleLogo from "./TitleLogo";
import BUG_CONTACT_OUTER from "../assets/bug-contact-outer.svg";
import SCRIBBLE_CIRCLE from "../assets/scribble-circle.gif";
import CHEVRON_DOWN from "../assets/icon-chevron-down.svg";
import ICON_X from "../assets/icon-x.svg";

const Utility = ({
  waypoint,
  order,
  siteHeadlineOpacity,
  siteHeadlineDisplay,
  privacyPolicyOpacity,
}) => {
  return (
    <>
      <header className="Utility" id="page-utility">
        <TitleLogo
          href="#hero"
          id="site-branding"
          classes="page-utility-component page-utility-upper page-utility-left"
        />
        <div
          className="page-utility-component page-utility-upper page-utility-right"
          style={{
            opacity: waypoint === "Contact" ? 0 : 1,
            transition: "200ms ease-in-out",
          }}
        >
          <div id="bug-site-contact">
            <a href="#contact">
              <BUG_CONTACT_OUTER
                className="bug-contact-img"
                id="bug-contact-img"
                width="auto"
                height="auto"
              />
            </a>
          </div>
        </div>
        <div
          className="page-utility-component page-utility-lower page-utility-left"
          id="site-nav"
        >
          <div id="site-nav-waypoint">{`${waypoint} - ${order}`}</div>
        </div>

        <div
          className="page-utility-component page-utility-lower page-utility-left"
          id="site-terms"
        >
          <p
            style={{
              opacity: waypoint === "Contact" ? 1 : privacyPolicyOpacity,
              transition: "200ms ease-in-out",
            }}
          >
            <a href="./terms" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <br />
            &copy; Outright 2023
            <br />
            <br />
            {/* <a
              href="https://www.designrush.com/agency/logo-branding/washington-dc"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignRush
            </a> */}
          </p>
        </div>
        <div
          className="page-utility-component page-utility-lower page-utility-center"
          id="intro-read-more"
        >
          <h2
            className="site-headline"
            style={{
              opacity: siteHeadlineOpacity,
              transition: "200ms ease-in-out",
              display: siteHeadlineDisplay,
            }}
          >
            <span>
              <Image
                src={SCRIBBLE_CIRCLE}
                alt="Scribble Circle"
                className="scribble"
                width={100}
                height={100}
              />
              Elevated creative for modern brands
            </span>
            <a href="#featured-01">
              <CHEVRON_DOWN className="hero-chevron-down" />
            </a>
          </h2>
        </div>
        <div className="page-utility-component page-utility-upper page-utility-right">
          <div id="contactform-close">
            <ICON_X />
          </div>
        </div>
      </header>
    </>
  );
};

export default Utility;
