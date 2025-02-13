import GNRTPane from "./GnrtPane";
import Iframe from "react-iframe";

// updated iframe_mobile property to use responsive_background_video

export const pane = {
  title: "GNRT.AI",
  uri: "modev-ai-event-for-a-new-era",
  collection: "clients",
  attributes: {
    id: "gnrt",
    containerClasses: ["left", "bottom"],
  },
  background: "img",
  background_video: "900197626",
  responsive_background_video: "900798479",
  order: "08",
  waypoint: "Featured",
  background_image: "bg-gnrt-video.jpg",
  iframe: (
    <Iframe
      src="https://player.vimeo.com/video/900197626?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="GNRT_Panel"
    ></Iframe>
  ),
  iframe_mobile: (
    <Iframe
      src="https://player.vimeo.com/video/900798479?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="GNRT_Panel"
    ></Iframe>
  ),
  hide_title: false,
  content: <GNRTPane />,
};
