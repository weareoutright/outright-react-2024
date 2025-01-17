import Project from "./scripts/newProjectConstructor";
import BG from "./assets/marriott-intl-leading-to-new-horizons/hero-bg.png";
import BENTO_TOP from "./assets/marriott-intl-leading-to-new-horizons/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/marriott-intl-leading-to-new-horizons/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/marriott-intl-leading-to-new-horizons/client-spotlight.png";
import MARRIOTT_INTL_NEW_HORIZONS_THUMBNAIL from "./assets/marriott-intl-leading-to-new-horizons/thumbnail.png";
import { GOOGLE_YT_BIG_GAME_BIGGER_ADS } from "@/app/our-work/client-work-pages/google-yt-big-game-bigger-ads.js";

export const MARRIOTT_INTL_NEW_HORIZONS = new Project({
  hero_bg_img: BG,
  client_full_name: "Marriott International",
  project_title: "Lead to New Horizons",
  tags: ["brand strategy", "visual identity", "sub-brands"],
  awards: ["award"],
  main_headline: (
    <>
      Advancing the program that guides Marriott International’s leaders
      forward.
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
      To help promising, ambitious associates make their way up the ranks at
      Marriott International, this long-time Outright client had developed a new
      executive advancement program. With everything riding on its success, the
      global hospitality giant tapped Outright to bring it to life. We quickly
      set to work building an engaging, accessible and exciting brand experience
      for the standout employees that the Marriott team were looking to retain
      and grow.
      <br />
      <br />
      Pulling from the feeling of continuous forward momentum and the
      anticipation of reaching a destination, our team of creative strategists
      dubbed the program “En Route.” The three-tiered approach to learning
      (Embark/Emerge/Base Camp) furthers the advancing journey metaphor, along
      with a custom illustration suite for KPI categories and a color palette
      that draws from distinguished competencies. Bold photography and concise
      headlines tie it all together, further accentuating En Route’s global
      aspirational appeal.
    </>
  ),
  prev_page: async () =>
    (await import("./me-too-intl-rebranding-a-movement"))
      .ME_TOO_REBRANDING_A_MOVEMENT,
  next_page: async () =>
    (await import("./google-yt-big-game-bigger-ads"))
      .GOOGLE_YT_BIG_GAME_BIGGER_ADS,

  slug: "/marriott-intl-leading-to-new-horizons",
  galleryThumbnail: MARRIOTT_INTL_NEW_HORIZONS_THUMBNAIL,
});
