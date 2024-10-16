"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { team_cards } from "./team_constants";
import { siteBaseUrl } from "../site_constants";
import { extractText } from "./assets";
import TitleLogo from "../components/TitleLogo";
import ICON_X from "../assets/icon-x.svg";
import SCRIBBLE_LINE from "../assets/scribble-line.gif";
import BUG_CONTACT_OUTER from "../assets/bug-contact-outer.svg";
import OUTRIGHT_O from "../components/outright-o.svg";
import "../css/modules/_team-card.scss";

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
    <div className="page-team" id="page-team" style={{ background: "black" }}>
      <header id="page-utility" className="page-team">
        <TitleLogo
          href={`${siteBaseUrl}/`}
          id={"site-branding"}
          classes={
            "page-utility-component page-utility-upper page-utility-left page-utility-page"
          }
        />
        <div className="page-utility-component page-utility-upper page-utility-right">
          <div id="bug-site-contact">
            <a href="#contact">
              <BUG_CONTACT_OUTER
                className="bug-contact-img"
                id="bug-contact-img"
              />
            </a>
          </div>
        </div>
        <div className="page-utility-component page-utility-upper page-utility-right">
          <div id="contactform-close">
            <svg src={ICON_X} alt="Close" width={"100"} height={"100"} />
            <ICON_X />
          </div>
        </div>
      </header>

      <section className="pane pane-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="pane-header">
                <h1 className="pane-title">
                  Meet the{" "}
                  <span className="team-underline">
                    Team
                    <Image
                      src={SCRIBBLE_LINE}
                      className="scribble"
                      alt="Scribble"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </span>
                </h1>
              </header>
              <div className="pane-content">
                <div className="row">
                  {team_cards.map((card) => {
                    const lowercaseName = card.name.toLowerCase();
                    const HEADSHOT = headshotImages[lowercaseName]?.default.src;

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
                                  src={HEADSHOT}
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
                                <OUTRIGHT_O />
                              </div>
                              <div className="img-container">
                                <Image
                                  className="cardColor img-fluid"
                                  src={HEADSHOT}
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
