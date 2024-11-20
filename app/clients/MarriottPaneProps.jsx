import MarriottPane from "./MarriottPane";
import Iframe from "react-iframe";

export const pane = {
    title: "Marriott International",
    collection: "clients",
    attributes: {
        id: "marriott",
        containerClasses: ["left", "bottom"],
    },
    background: "img",
    background_video: "830658831",
    responsive_background_video: "830658831",
    order: "06",
    waypoint: "Featured",
    background_image: "bg-marriott-video.jpg",
    iframe: (
        <Iframe
            src="https://player.vimeo.com/video/830658831?h=d4f53ec5fd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
            frameborder="0"
            title="Marriott_Panel"
        ></Iframe>
    ),
    hide_title: false,
    content: <MarriottPane />,
};