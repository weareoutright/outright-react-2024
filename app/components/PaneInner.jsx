import Spinner from "./Spinner";

const PaneInner = ({ pane }) => {
  return (
    <>
      {pane.background_video && (
        <div className="video-bg">
          <div
            id={`video-${pane.background_video}`}
            className="video-bg-embed"
            data-videourl={pane.background_video}
          ></div>
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
      <div
        className={`container container-${
          pane.attributes.id
        } container-${pane.attributes.containerClasses.join(
          " container-"
        )} container-bg-${pane.background}`}
      >
        <div className="row">
          <div className="col-12">
            {(pane.title || pane.header_content) && !pane.hide_title && (
              <header className="pane-header">
                {pane.attributes.id === "hero" ? (
                  <h1 className="pane-title site-title">
                    <img src="../assets/logo-o.svg" alt="outright" />
                  </h1>
                ) : (
                  <h1 className="pane-title">
                    {pane.title}
                    {pane.attributes.id === "about" && (
                      <>
                        {/* Uncomment the line below if you need it */}
                        {/* <img src={`${process.env.PUBLIC_URL}/media/scribble-line-alt.gif`} className="scribble" /> */}
                        <img
                          src="../assets/scribble-circle.gif"
                          className="scribble"
                        />
                        <div>
                          <img
                            src="../assets/outright-arrow.png"
                            className="arrow"
                          />
                          <a href="./team">
                            <img
                              src="../assets/meet-the-team.png"
                              className="meet-the-team"
                            />
                          </a>
                        </div>
                      </>
                    )}
                    {pane.attributes.id === "services" && (
                      <img
                        src="../assets/scribble-circle.gif"
                        className="scribble"
                      />
                    )}
                    {pane.attributes.id === "contact" && (
                      <img
                        src="../assets/scribble-line.gif"
                        className="scribble"
                      />
                    )}
                  </h1>
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
        {pane.attributes.id === "contactform" && (
          <Spinner
            text="Send it!"
            classes="spinner-contact spinner-contactform"
          />
        )}
        {pane.attributes.id === "contact" && (
          <Spinner
            text="Say hey!"
            classes="spinner-contact spinner-contactmain"
          />
        )}
        {pane.attributes.id === "clientscover" && (
          <Spinner text="" classes="spinner-clients spinner-clientscover" />
        )}
        {/* Uncomment the line below if you need it */}
        {/* {include.pane.attributes.id === 'about' && <Spinner text="" id="spinner-about" />} */}
      </div>
    </>
  );
};

export default PaneInner;
