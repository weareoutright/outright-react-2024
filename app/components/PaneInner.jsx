import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SCRIBBLE_LINE from "../assets/scribble-line.gif";
import LOGO_O from "../assets/logo-o.svg";

const PaneInner = ({ pane }) => {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // ✅ Detect visibility
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current.querySelector("iframe"); // ✅ Get actual iframe element

    if (iframe && iframe.src.includes("vimeo.com")) {
      if (isVisible) {
        iframe.contentWindow.postMessage(
          '{"method":"play"}',
          "https://player.vimeo.com"
        ); // ✅ Play when visible
      } else {
        iframe.contentWindow.postMessage(
          '{"method":"pause"}',
          "https://player.vimeo.com"
        ); // ⏸ Pause when out of view
      }
    }
  }, [isVisible]);

  return (
    <div
      className={`container container-${
        pane.attributes.id
      } container-${pane.attributes.containerClasses.join(
        " container-"
      )} container-bg-${pane.background}`}
    >
      <div className="row">
        {pane.background_video && (
          <div className="video-bg">
            <div className="gradient-box" />
            <div
              id={`video-${pane.background_video}`}
              className="video-bg-embed"
              data-videourl={pane.background_video}
            >
              <div ref={iframeRef}>{pane.iframe}</div>{" "}
              {/* ✅ Attach ref to detect iframe */}
            </div>
          </div>
        )}

        {pane.responsive_background_video && isMobile && (
          <div className="video-bg video-bg-vertical">
            <div
              id={`video-${pane.responsive_background_video}`}
              className="video-bg-embed"
              data-videourl={pane.responsive_background_video}
            >
              <div ref={iframeRef}>{pane.iframe_mobile}</div>
            </div>
          </div>
        )}

        <div className="col-12">
          {(pane.title || pane.header_content) && !pane.hide_title && (
            <header className="pane-header">
              {pane.attributes.id === "hero" ? (
                <h1 className="pane-title site-title">
                  <LOGO_O />
                </h1>
              ) : (
                <h1
                  className={
                    pane.attributes.id === "contact"
                      ? "contact-title pane-title"
                      : "pane-title"
                  }
                >
                  {pane.title}
                  {pane.attributes.id === "contact" && (
                    <Image
                      src={SCRIBBLE_LINE}
                      className="contact-scribble"
                      width={100}
                      height={100}
                      unoptimized
                      alt=""
                    />
                  )}
                </h1>
              )}
              {pane.header_content && (
                <div className="pane-header-content">{pane.header_content}</div>
              )}
            </header>
          )}
          <div className="pane-content">{pane.content}</div>
        </div>
      </div>
    </div>
  );
};

export default PaneInner;
