import ICON_CHEVRON_DOWN from "../assets/icon-chevron-down.svg";
import SCRIBBLE_LINE_DARK from "../assets/scribble-line-dark.svg";
import { useState } from "react";

const SeeMoreWork = () => {
  const [opacity, setOpacity] = useState(0);
  return (
    <div className="see-more-work" id="our-work">
      <a
        href="/our-work"
        className="see-more-work-link-wrapper"
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
      >
        <div className="header-text">
          <p className="pane-title">Whether it’s for iconic brands or change-making nonprofits, we strategize, concept, and expertly execute work that moves clients forward.</p>
          <a
            href="/our-work"
            className="check-out-our-work-link underline"
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
          >
            <br />
            <h2 className="work-subheading underline">
              Dig into our work.
              <SCRIBBLE_LINE_DARK style={{ opacity: opacity }} />
            </h2>
          </a>
        </div>
        <br />
      {/*  <a*/}
      {/*    href="/our-work"*/}
      {/*    className="right-chevron-link"*/}
      {/*    onMouseEnter={() => setOpacity(1)}*/}
      {/*    onMouseLeave={() => setOpacity(0)}*/}
      {/*  >*/}
      {/*    <br />*/}
      {/*    <h2 className="work-subheading underline">*/}
      {/*      Dig into our work*/}
      {/*      <SCRIBBLE_LINE_DARK style={{ opacity: opacity }} />*/}
      {/*    </h2>*/}
      {/*  </a>*/}
      </a>
    </div>
  );
};

export default SeeMoreWork;
