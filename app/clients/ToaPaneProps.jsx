import Iframe from "react-iframe";
import ToaPane from "./ToaPane.jsx";

export const pane = {
  title: "The Opportunity Agenda",
  uri: "opp-agenda-shifting-narratives",
  collection: "clients",
  attributes: {
    id: "oppagenda",
    containerClasses: ["left", "bottom"],
  },
  background: "img",
  background_video: "810200343/5f29fba47c",
  responsive_background_video: "827636943/1b4da19fe7",
  order: "07",
  waypoint: "Featured",
  background_image: "bg-oppagenda-video.jpg",
  iframe: (
    <Iframe
      src="https://player.vimeo.com/video/810200343?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="Oppagenda_Panel"
    ></Iframe>
  ),
  hide_title: false,
  content: <ToaPane />,
};
