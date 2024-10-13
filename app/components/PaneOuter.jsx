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
