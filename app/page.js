import PaneOuter from "./components/PaneOuter";
import Utility from "./components/Utility";
import { pane as YouTubePane } from "./clients/YouTubePaneProps.js";
import HeroPane from "./panes/HeroPane.jsx";

export default function Home() {
  return (
    // <div
    //   style={{ cursor: `url("./assets/cursor.svg")` }}
    //   className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    // >
    <>
      <Utility />
      <HeroPane />
      <PaneOuter
        background={YouTubePane.background}
        collection={null}
        attributes={YouTubePane.attributes}
        waypoint={YouTubePane.waypoint}
        background_image={null}
        site={null}
        pane={YouTubePane}
      />
    </>
    // </div>
  );
}
