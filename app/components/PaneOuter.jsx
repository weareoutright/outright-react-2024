const PaneOuter = ({
  background,
  collection,
  attributes,
  waypoint,
  background_image,
  site,
  pane,
}) => {
  return (
    <section
      className={`pane pane-bg-${background} pane-${collection} 
    ${attributes.autoheight ? "fp-auto-height" : ""} 
    ${attributes.autoheight_responsive ? "fp-auto-height-responsive" : ""}`}
      id={`pane-${attributes.id}`}
      data-anchor={attributes.id}
      data-waypoint={waypoint}
      data-bg={background}
      style={
        background_image
          ? { backgroundImage: `url('media/${background_image}')` }
          : {}
      }
    >
      {(attributes.id === "contact" || attributes.id === "clientscover") && (
        <div className="wipe-container">
          {attributes.id === "contact" && (
            // Assuming you have the pane_inner component to handle the content
            <PaneInner
              pane={
                site.panes.find((p) => p.attributes.id === "contactform") || {}
              }
            />
          )}

          {attributes.id === "clientscover" && (
            // Handling clientscover pane
            <PaneInner
              pane={site.panes.find((p) => p.attributes.id === "clients") || {}}
            />
          )}
        </div>
      )}

      {/* Include the primary pane content */}
      <PaneInner pane={pane} />

      {attributes.id === "contact" && (
        <div className="o-wrapper">
          <div className="o-outer"></div>
        </div>
      )}
    </section>
  );
};

export default PaneOuter;
