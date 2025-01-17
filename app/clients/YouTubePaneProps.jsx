import Iframe from "react-iframe";
import YouTubePane from "./YouTubePane.jsx";

export const pane = {
  title: "Google/YouTube",
  uri: "/google-youtube-big-game-bigger-ads",
  collection: "clients",
  attributes: {
    id: "youtube",
    containerClasses: ["left", "bottom"],
  },
  background: "img",
  background_video: "743409497/5f29fba47c",
  responsive_background_video: "827636943/1b4da19fe7",
  order: "02",
  waypoint: "Featured",
  background_image: "bg-youtube-video.jpg",
  iframe: (
    <Iframe
      src="https://player.vimeo.com/video/743409497?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
      frameborder="0"
      title="Google_YT_Panel"
    ></Iframe>
  ),
  hide_title: false,
  content: <YouTubePane />,
};
