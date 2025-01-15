import Project from "./scripts/newProjectConstructor";
import BG from "./assets/wri-data-driven-revolution/hero-bg.png";
import BENTO_TOP from "./assets/wri-data-driven-revolution/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/wri-data-driven-revolution/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/wri-data-driven-revolution/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/wri-data-driven-revolution/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/wri-data-driven-revolution/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/wri-data-driven-revolution/client-spotlight.png";
import WRI_DATA_DRIVEN_REVOLUTION_THUMBNAIL from "./assets/wri-data-driven-revolution/thumbnail.png";
import {
  GOOGLE_YT_CONNECTING_BEYOND_COACHELLA
} from "@/app/our-work/client-work-pages/google-yt-connecting-beyond-coachella.js";

export const WRI_DATA_DRIVEN_REVOLUTION = new Project({
  hero_bg_img: BG,
  client_full_name: "World Resources Institute",
  project_title: "Visualizing Global Transformation",
  tags: ["brand strategy", "visual identity", "data visualization"],
  awards: ["Fast Company Innovation by Design Honoree", "Webby Award Honoree", "Information Is Beautiful Shortlist"],
  main_headline: (
    <>
        Changing the way decision-makers change the world.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
        We’re trying to find a compelling way to visualize data across multiple systems into a single platform. It’s been essential having Outright and Graphicacy work with us hand-in-hand to figure out how to bring systems change to life.
    </>
  ),
  speaker_name: "Cathline Dickens",
  speaker_title: "Product Manager",
  speaker_org: "Systems Change Lab",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
        Transformational change is needed to address the world’s biggest environmental, economic and social issues. But creating that change effectively and efficiently is complex, and requires decision-makers to have deep knowledge and extensive understanding of all the factors at play. That’s where Systems Change Lab (SCL) comes in. Outright partnered with the nonprofit to help them create an extensive and immersive open-source data visualization platform that effortlessly tracks and distills vast amounts of information into actionable insights that can be prioritized to best tackle these challenges.
      <br />
      <br />
        The SCL platform includes more than 500 indicators, each representing hundreds or thousands of data points. And Outright designed every element of it. We started by immersing ourselves in the world of scientists, data analysts, and climate experts, gleaning insights from focus groups and testing to inform every aspect of our work—from the name and our initial design concepts (that helped secure additional grants for the platform) to brand identity and platform development with our data visualization partner, Graphicacy. Post-launch, Outright continues to provide web support and enhancements for SCL.
    </>
  ),
  prev_page: async () =>
    (await import("./edf-vision-2030"))
      .EDF_VISION_2030,
  next_page: async () => (await import("./modev-ai-event-for-a-new-era")).MODEV_AI_EVENT_FOR_A_NEW_ERA,
  slug: "/world-resources-institute-data-driven-revolution",
  galleryThumbnail: WRI_DATA_DRIVEN_REVOLUTION_THUMBNAIL,
});
