"use client";

import React, { useState, useEffect } from "react";
import LOGO_O from "../assets/logo-o.svg";
import LOGO_FULL from "../assets/logo-outright-dark.svg";

const TitleLogo = ({
  classes = "page-utility-component page-utility-upper page-utility-left page-utility-page",
  id = "site-branding",
}) => {
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  const workHref = currentRoute === "/our-work" ? "/#our-work" : "/our-work";

  return (
    <div className={classes}>
      <div id={id}>
        <h1 className="title-logo">
          <a href="/" className="header-logo-nav">
            <span className="title-logo-img">
              <LOGO_O />
            </span>
            <span className="title-logo-img-full">
              <LOGO_FULL />
            </span>
          </a>
          <span>outright</span>
          <div className="nav-links">
            <a className="link" href={workHref}>
              work
            </a>
            <span>outright</span>
            <div className="nav-links">
              <a className="link" href={workHref}>
                work
              </a>
              <a className="link" href="/team">
                who we are
              </a>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default TitleLogo;
