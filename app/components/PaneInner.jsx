import Image from "next/image";
import SCRIBBLE_LINE from "../assets/scribble-line.gif";
import LOGO_O from "../assets/logo-o.svg";

const PaneInner = ({ pane }) => {
  return (
    <>
      <div
        className={`container container-${
          pane.attributes.id
        } container-${pane.attributes.containerClasses.join(
          " container-"
        )} container-bg-${pane.background} `}
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
                {pane.iframe}
              </div>
            </div>
          )}
          {pane.responsive_background_video && (
            <div className="video-bg video-bg-vertical">
              <div
                id={`video-${pane.responsive_background_video}`}
                className="video-bg-embed"
                data-videourl={pane.responsive_background_video}
              ></div>
            </div>
          )}
          <div className="col-12">
            {(pane.title || pane.header_content) && !pane.hide_title && (
              <header className="pane-header">
                {pane.attributes.id === "hero" ? (
                  <h2 className="pane-title site-title">
                    <Image src={LOGO_O} alt="" />
                  </h2>
                ) : (
                  <h2
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
                  </h2>
                )}
                {pane.header_content && (
                  <div className="pane-header-content">
                    {pane.header_content}
                  </div>
                )}
              </header>
            )}
            <div className="pane-content">{pane.content}</div>
          </div>
        </div>
        {/* {pane.attributes.id === "contactform" && (
          <Spinner
            text="Send it!"
            classes="spinner-contact spinner-contactform"
          />
        )}*/}
      </div>
    </>
  );
};

export default PaneInner;
