"use client";

import React from "react";
import bgZoomImages from "./assets/bg-zoom";
import outrightZoomImages from "./assets/outright-zoom";
import Image from "next/image";

const ZoomGallery = () => {
  // Function to handle image download
  const handleImageDownload = (downloadHref, key) => {
    const link = document.createElement("a");
    link.href = downloadHref;
    link.download = `outright-zoom-${key}-full.jpg`; // Set the default download filename
    link.click();
  };

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
                {bgZoomImages.map((card, index) => {
                  // Find the corresponding outright zoom image by key
                  const outrightZoomImage = outrightZoomImages.find(
                    (img) => img.key === card.key
                  );

                  // Construct the href for the download link
                  const downloadHref = outrightZoomImage
                    ? outrightZoomImage.src.src
                    : `./app/zoom/assets/outright-zoom/outright-zoom-${card.key}-full.jpg`;

                  return (
                    <div key={index} className="col-12 col-md-6">
                      <div className="card-zoom">
                        <Image
                          className="card-zoom-bg"
                          src={card.src.src}
                          alt={card.key}
                          onClick={() =>
                            handleImageDownload(downloadHref, card.key)
                          }
                          style={{ cursor: "pointer" }} // Makes it clear that the image is clickable
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p>
                It&apos;s really easy to install video call backgrounds &mdash;{" "}
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
