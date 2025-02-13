import Iframe from "react-iframe";
import MeTooPane from "./MeTooPane.jsx";

export const pane = {
  title: "me too. Movement",
  collection: "clients",
  attributes: {
    id: "metoo",
    containerClasses: ["left", "bottom"],
  },
  background: "img",
  background_video: "818003296/5f29fba47c",
  responsive_background_video: "827636943/1b4da19fe7",
  order: "04",
  waypoint: "Featured",
  background_image: "bg-metoo.jpg",
  iframe: (
    <Iframe
      src="https://player.vimeo.com/video/818003296?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="MeToo_Panel"
    ></Iframe>
  ),
  iframe_mobile: (
    <Iframe
      src="https://player.vimeo.com/video/827636943?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="MeToo_Panel"
    ></Iframe>
  ),
  hide_title: false,
  content: <MeTooPane />,
};
