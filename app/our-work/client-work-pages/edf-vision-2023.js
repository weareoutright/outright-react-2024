import Project from "./newProjectConstructor";
import BG from "./assets/edf-vision-2023/edf-vision-2023-bg.png";
import BENTO_TOP from "./assets/edf-vision-2023/edf-vision-2023-bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/edf-vision-2023/edf-vision-2023-bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/edf-vision-2023/edf-vision-2023-bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/edf-vision-2023/edf-vision-2023-bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/edf-vision-2023/edf-vision-2023-full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/edf-vision-2023/edf-vision-2023-client-spotlight.png";

export const EDF_VISION_2023 = new Project({
  hero_bg_img: BG,
  client_full_name: "Environmental Defense Fund",
  project_title: "Vision 2023",
  tags: ["microsites", "ux/ui", "website development"],
  main_headline: (
    <>Visualizing an ambitious plan for climate action this decade.</>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      Outright&apos;s ability to meet our design challenges across tone,
      audiences, and programmatic offerings was very impressive.
    </>
  ),
  speaker_name: "Denise Beek",
  speaker_title: "Chief Communications Officer",
  speaker_org: "me too. International",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      With an ambitious climate action plan for the decade, the Environmental
      Defense Fund enlisted Outright to create a bespoke, interactive web
      experience to mobilize the most promising climate opportunities.
      <br />
      <br />
      The key challenge was to present extensive content and research in a
      captivating way. We distilled rich information into a visual narrative,
      using human-focused photography and inventive UX strategies to drive
      awareness and engagement.
      <br />
      <br />
      Vision 2030 sets a new standard for web experiences within the
      organization. Standout features include interactive stories, carefully
      curated photography, and bold design elements that make information easily
      digestible and inspire action.
    </>
  ),
  prev_page: "/",
  next_page: "/experience-fayetteville-embrace-the-day-savor-the-night",
});
