const PaneInner = ({
  background_video,
  responsive_background_video,
  attributes,
  background,
  title,
  header_content,
  content,
}) => {
  return (
    <>
      {background_video && (
        <div className="video-bg">
          <div
            id={`video-${background_video}`}
            className="video-bg-embed"
            data-videourl={background_video}
          ></div>
        </div>
      )}
      {responsive_background_video && (
        <div className="video-bg video-bg-vertical">
          <div
            id={`video-${responsive_background_video}`}
            className="video-bg-embed"
            data-videourl={responsive_background_video}
          ></div>
        </div>
      )}
      <div
        className={`container container-${
          attributes.id
        } container-${attributes.containerClasses.join(
          " container-"
        )} container-bg-${background}`}
      >
        <div className="row">
          <div className="col-12">
            {(title || header_content) && !hide_title && (
              <header className="pane-header">
                {attributes.id === "hero" ? (
                  <h1 className="pane-title site-title">
                    <img src="../assets/logo-o.svg" alt="outright" />
                  </h1>
                ) : (
                  <h1 className="pane-title">
                    {title}
                    {attributes.id === "about" && (
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
                    {attributes.id === "services" && (
                      <img
                        src="../assets/scribble-circle.gif"
                        className="scribble"
                      />
                    )}
                    {attributes.id === "contact" && (
                      <img
                        src="../assets/scribble-line.gif"
                        className="scribble"
                      />
                    )}
                  </h1>
                )}
                {header_content && (
                  <div className="pane-header-content">{header_content}</div>
                )}
              </header>
            )}
            <div className="pane-content">{content}</div>
          </div>
        </div>
        {attributes.id === "contactform" && (
          <Spinner
            text="Send it!"
            classes="spinner-contact spinner-contactform"
          />
        )}
        {attributes.id === "contact" && (
          <Spinner
            text="Say hey!"
            classes="spinner-contact spinner-contactmain"
          />
        )}
        {attributes.id === "clientscover" && (
          <Spinner text="" classes="spinner-clients spinner-clientscover" />
        )}
        {/* Uncomment the line below if you need it */}
        {/* {include.pane.attributes.id === 'about' && <Spinner text="" id="spinner-about" />} */}
      </div>
    </>
  );
};

export default PaneInner;
