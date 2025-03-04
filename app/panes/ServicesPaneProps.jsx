import Image from "next/image";
import ServicesPane from "./ServicesPane";
import SCRIBBLE_CIRCLE from "../assets/scribble-circle.gif";

export const pane = {
  title: (
    <div className="scribble-circle-word-container">
      And this is
      <br />
      <span className="scribble-circled-word">
        {" "}
        <Image
          src={SCRIBBLE_CIRCLE}
          className="service-scribble scribble"
          width={100}
          height={100}
          alt=""
        />
        <span>how</span>
      </span>{" "}
      we do it.
    </div>
  ),
  attributes: {
    id: "services",
    autoheight_responsive: true,
    containerClasses: ["center"],
  },
  background: "white",
  order: "07",
  waypoint: "Approach",
  content: <ServicesPane />,
};
