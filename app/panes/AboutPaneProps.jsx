import Image from "next/image";
import SCRIBBLE_CIRCLE from "../assets/scribble-circle.gif";
import OUTRIGHT_ARROW from "../assets/outright-arrow.png";
import MEET_THE_TEAM from "../assets/meet-the-team.png";
import AboutPane from "./About";

export const pane = {
  title: (
    <div className="scribble-circle-word-container">
      With the
      <br /> right{" "}
      <span className="scribble-circled-word">
        {" "}
        <Image
          src={SCRIBBLE_CIRCLE}
          className="service-scribble scribble"
          width={100}
          height={100}
          alt=""
        />
        <span>people</span>,
      </span>
      <span className="meet-the-team-arrow">
        <Image
          src={OUTRIGHT_ARROW}
          className="service-arrow"
          width={100}
          height={100}
          alt=""
        />
        <a href="./team">
          <Image
            src={MEET_THE_TEAM}
            className="service-meet-the-team"
            width={100}
            height={100}
            alt=""
          />
        </a>
      </span>
      <br />
      anything is
      <br /> possible …
        <div className={"mobile-display"}>
            <div className="meet-the-team-arrow-bottom">
        <Image
            src={OUTRIGHT_ARROW}
            className="service-arrow"
            width={50}
            height={50}
            alt=""
        />
        <a href="./team">
          <Image
              src={MEET_THE_TEAM}
              className="service-meet-the-team-bottom"
              width={300}
              height={40}
              alt=""
          />
        </a>
      </div>
        </div>
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
    content: <AboutPane/>,
};
