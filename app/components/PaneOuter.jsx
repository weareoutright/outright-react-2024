import { useEffect } from "react";
import PaneInner from "./PaneInner";
import Spinner from "./Spinner";

const PaneOuter = ({ pane, currentWaypoint }) => {
  return (
    <>
      <section
        className={`pane pane-bg-${pane.background} pane-${pane.collection} 
    ${pane.attributes.autoheight ? "fp-auto-height" : ""} 
    ${
      pane.attributes.autoheight_responsive ? "fp-auto-height-responsive" : ""
    }`}
        id={`pane-${pane.attributes.id}`}
        data-anchor={pane.attributes.id}
        data-waypoint={pane.waypoint}
        data-bg={pane.background}
        style={{
          backgroundImage: pane.background_image
            ? `url('../assets/${pane.background_image})`
            : "",
          height: pane.attributes.id === "see-more" ? "75vh" : "100%",
          scrollSnapAlign:
            pane.attributes.id === "see-more" ? "center" : "start",
        }}
      >
        {/* Include the primary pane content */}
        <PaneInner pane={pane} />

        {pane.attributes.id === "contact" && (
          <div className="o-wrapper">
            <div className="o-outer"></div>
          </div>
        )}
      </section>
      {currentWaypoint === "Contact" ? (
        <Spinner
          text="Say hey!"
          classes="spinner-contact"
          style={{ transition: "200ms ease-in-out" }}
        />
      ) : (
        <Spinner
          text="Say hey!"
          classes="spinner-no-show spinner-contact"
          style={{ transition: "200ms ease-in-out" }}
        />
      )}
    </>
  );
};

export default PaneOuter;
