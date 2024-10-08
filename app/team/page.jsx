"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { team_cards, pageTitle } from "./team_constants";
import { siteBaseUrl } from "../site_constants";
import amanda from "./assets/amanda.png";
import { extractText } from "./assets";

const TeamPage = () => {
  const headshotImgObj = {};
  const [headshotImages, setHeadshotImages] = useState({});
  const images = require.context("./assets", true);
  const imageKeys = images.keys().map((key) => extractText(key));

  useEffect(() => {
    images.keys().forEach((image, index) => {
      headshotImgObj[imageKeys[index]] = images(image);
    });
    delete headshotImgObj["undefined"];
    setHeadshotImages(headshotImgObj);
  }, []);

  return (
    <div id="page-team">
      <header id="page-utility">
        <div className="page-utility-component page-utility-upper page-utility-left page-utility-page">
          <div id="site-branding">
            <a href={`${siteBaseUrl}/`}>
              {/* Replace this with the actual logo component or image */}
              {/* <TitleLogo /> */}
            </a>
          </div>
        </div>
        <div className="page-utility-component page-utility-upper page-utility-right">
          <div id="bug-site-contact">
            <a href="#contact">
              <img
                src={`${siteBaseUrl}/media/bug-contact-outer.svg`}
                className="bug-contact-img"
                alt="Contact"
              />
            </a>
          </div>
        </div>
        <div className="page-utility-component page-utility-upper page-utility-right">
          <div id="contactform-close">
            <img src={`${siteBaseUrl}/media/icon-x.svg`} alt="Close" />
          </div>
        </div>
      </header>

      <section className="pane pane-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pane-header">
                <h1 className="pane-title">
                  {pageTitle}
                  <img
                    src={`${siteBaseUrl}/media/scribble-line.gif`}
                    className="scribble"
                    alt="Scribble"
                  />
                </h1>
              </header>
              <div className="pane-content">
                <div className="row">
                  {team_cards.map((card) => {
                    const lowercaseName = card.name.toLowerCase();
                    const headshot = headshotImages[lowercaseName]?.default.src;
                    return (
                      <div
                        key={card.name}
                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                      >
                        <div className="team-card">
                          <div className="wipe-wrapper">
                            <div className="front">
                              <div className="img-container">
                                <Image
                                  className="cardColor img-fluid"
                                  src={headshot}
                                  alt={card.name}
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <h3 className="card-text transform">
                                <span className="name">{card.name}</span>
                                <br />
                                <span className="title active">
                                  {card.title}
                                </span>
                              </h3>
                            </div>

                            <div className="back">
                              <div className="card-bg">
                                {/* You need to include the SVG here, or another component */}
                                {/* <OutrightO /> */}
                              </div>
                              <div className="img-container">
                                <Image
                                  className="cardColor img-fluid"
                                  src={headshot}
                                  alt={card.name}
                                  width={"100"}
                                  height={"100"}
                                />
                              </div>
                              <h3 className="card-text transform">
                                <span className="name">{card.name}</span>
                                <br />
                                <span className="fun-title">
                                  {card.funTitle}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace this with actual contact section */}
      {/* <ContactPane /> */}
    </div>
  );
};

export default TeamPage;
