import Project from "./scripts/newProjectConstructor";
import BG from "./assets/edf-vision-2030/hero-bg.png";
import BENTO_TOP from "./assets/edf-vision-2030/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/edf-vision-2030/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/edf-vision-2030/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/edf-vision-2030/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/edf-vision-2030/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/edf-vision-2030/client-spotlight.png";
import EDF_VISION_2030_THUMBNAIL from "./assets/edf-vision-2030/thumbnail.png";

export const EDF_VISION_2030 = new Project({
  hero_bg_img: BG,
  client_full_name: "Environmental Defense Fund",
  project_title: "Vision 2030",
  tags: ["information design", "ux/ui design", "website development"],
  awards: ["Bronze Anthem Award - Digital & Innovative Experiences"],
  main_headline: (
    <>
      Implementing innovative, creative solutions so a global environmental
      nonprofit can do the same.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: null,
  speaker_name: "",
  speaker_title: "",
  speaker_org: "",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      More than 50-years deep in the work of building innovative solutions to
      address the world’s greatest environmental challenges, the Environmental
      Defense Fund (EDF)needed help mobilizing the most promising opportunities
      in pursuit of its ambitious climate goals. The legacy nonprofit enlisted
      Outright to develop a captivating and inspirational way to share extensive
      content and research.
      <br />
      <br />
      Anchored in EDF’s newly refreshed brand identity, we created a bespoke,
      interactive web experience. The resulting Vision 2030 represents the
      organization’s newly defined online approach—distilling rich information
      into easy-to-digest visual narratives, employing inventive UX strategies
      to further engagement and centering human-focused photography with a
      concentric circle treatment to visually express the ever-expanding impact
      our actions set in motion.
    </>
  ),
  prev_page: async () =>
    (await import("./google-yt-connecting-beyond-coachella"))
      .GOOGLE_YT_CONNECTING_BEYOND_COACHELLA,
  next_page: async () =>
    (await import("./wri-data-driven-revolution")).WRI_DATA_DRIVEN_REVOLUTION,
  slug: "/edf-vision-2030",
  galleryThumbnail: EDF_VISION_2030_THUMBNAIL,
});
