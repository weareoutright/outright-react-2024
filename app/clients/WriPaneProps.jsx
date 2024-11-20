import Iframe from "react-iframe";
import WriPane from "./WriPane.jsx";

export const pane = {
    title: "World Resources Institute",
    collection: "clients",
    attributes: {
        id: "wri",
        containerClasses: ["left", "bottom"],
    },
    background: "img",
    background_video: "665768955/5f29fba47c",
    responsive_background_video: "827636943/1b4da19fe7",
    order: "05",
    waypoint: "Featured",
    background_image: "bg-youtube-video.jpg",
    iframe: (
        <Iframe
            src="https://player.vimeo.com/video/665768955?badge=0&amp;autopause=0&amp;player_id=0&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;responsive=1&amp;background=1&amp;app_id=58479"
            frameborder="0"
            title="WRI_Panel"
        ></Iframe>
    ),
    hide_title: false,
    content: <WriPane />,
};