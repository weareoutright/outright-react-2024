import Image from "next/image";
import SCRIBBLE_CIRCLE from "../assets/scribble-circle.gif";
import AboutPane from "./About";

export const pane = {
  title: (
    <div className="scribble-circle-word-container">
      We&apos;re{" "}
      <span className="scribble-circled-word">
        {" "}
        <Image
          src={SCRIBBLE_CIRCLE}
          className="service-scribble scribble"
          width={90}
          height={100}
          alt=""
        />
        <span>passionate</span>,
      </span>
      <br />
      about brands that create change and define culture.
    </div>
  ),
  attributes: {
    id: "about",
    autoheight_responsive: true,
    containerClasses: ["left"],
  },
  background: "black",
  order: "06",
  waypoint: "Who We Are",
  content: <AboutPane />,
};
