import PaneInner from "./PaneInner";

const PaneOuter = ({ pane }) => {
  return (
    <section
      className={`pane pane-bg-${pane.background} pane-${pane.collection} 
    ${pane.attributes.autoheight ? "fp-auto-height" : ""} 
    ${
      pane.attributes.autoheight_responsive ? "fp-auto-height-responsive" : ""
    } `}
      id={`pane-${pane.attributes.id}`}
      data-anchor={pane.attributes.id}
      data-waypoint={pane.waypoint}
      data-bg={pane.background}
      style={
        pane.background_image
          ? { backgroundImage: `url('../assets/${pane.background_image}')` }
          : {}
      }
    >
      {/* {(attributes.id === "contact" || attributes.id === "clientscover") && (
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
      )} */}

      {/* Include the primary pane content */}
      <PaneInner pane={pane} />

      {pane.attributes.id === "contact" && (
        <div className="o-wrapper">
          <div className="o-outer"></div>
        </div>
      )}
    </section>
  );
};

export default PaneOuter;
