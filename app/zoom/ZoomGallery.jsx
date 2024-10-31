import React from "react";
import { siteBaseUrl } from "../site_constants";
import ZOOM_CARDS from "./zoom_cards";

const ZoomGallery = () => {
  return (
    <section className="pane pane-zoom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pane-header">
              <h1>SPICE UP YOUR VIDEO CALLS.</h1>
              <p>with our new free and downloadable backgrounds.</p>
            </div>

            <div className="pane-content">
              <div className="row">
                {ZOOM_CARDS.map((card, index) => {
                  console.log(card);
                  return (
                    <div key={index} className="col-12 col-md-6">
                      <div className="card-zoom">
                        <a
                          href={`./app/outright-zoom-${card[0]}-full.jpg`}
                          target="_blank"
                          download
                          rel="noopener noreferrer"
                        >
                          <img
                            className="card-zoom-bg"
                            src={`/app/assets/bg-zoom-${card[0]}.jpg`}
                            alt={card[1]}
                          />
                          {/* Uncomment for alternate background image */}
                          {/* <img className="card-zoom-bg bg-alt" src={`${process.env.REACT_APP_BASE_URL}/media/bg-zoom-${card[0]}-alt.jpg`} alt={card[1]} /> */}
                        </a>
                        {/* Uncomment for download link with title */}
                        {/* <h2>
                          <a href={`${process.env.REACT_APP_BASE_URL}/media/outright-zoom-${card[0]}-full.jpg`} target="_blank" download rel="noopener noreferrer">
                            {card[1]} 
                            <img src={`${process.env.REACT_APP_BASE_URL}/media/icon-download.png`} className="icon-download" alt="Download icon" />
                            <img src={`${process.env.REACT_APP_BASE_URL}/media/icon-download-alt.png`} className="icon-download-alt" alt="Alternate download icon" />
                          </a>
                        </h2> */}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p>
                It&apos;s really easy to install video call backgrounds –{" "}
                <a
                  href="https://gizmodo.com/how-to-change-your-background-on-a-video-conference-cal-1845122637"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here's how
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="spinner spinner-zoom">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default ZoomGallery;
