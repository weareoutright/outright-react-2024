import Iframe from "react-iframe";
import RtcPane from "./RtcPane.jsx";

export const pane = {
  title: "Rails to Trails Conservancy",
  uri: "rails-to-trails-conservancy-we-see-more-than-a-trail",
  collection: "clients",
  attributes: {
    id: "rtc",
    containerClasses: ["left", "bottom"],
  },
  background: "img",
  background_video: "949623347/3f19278383",
  responsive_background_video: "827636943/1b4da19fe7",
  order: "03",
  waypoint: "Featured",
  background_image: "bg-rtc-video.jpg",
  iframe: (
    <Iframe
      src="https://player.vimeo.com/video/949623347?h=3f19278383&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="RTC_Panel"
    ></Iframe>
  ),
  iframe_mobile: (
    <Iframe
      src="https://player.vimeo.com/video/923849598?h=1b4da19fe7&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="RTC_Panel"
    ></Iframe>
  ),
  hide_title: false,
  content: <RtcPane />,
};
