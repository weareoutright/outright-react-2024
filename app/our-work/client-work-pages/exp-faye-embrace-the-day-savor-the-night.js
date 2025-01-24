import Project from "./scripts/newProjectConstructor.mjs";
import BG from "./assets/exp-faye-embrace-the-day-savor-the-night/hero-bg.png";
import BENTO_TOP from "./assets/exp-faye-embrace-the-day-savor-the-night/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/exp-faye-embrace-the-day-savor-the-night/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/exp-faye-embrace-the-day-savor-the-night/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/exp-faye-embrace-the-day-savor-the-night/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/exp-faye-embrace-the-day-savor-the-night/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/exp-faye-embrace-the-day-savor-the-night/client-spotlight.png";
import EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT_THUMBNAIL from "./assets/exp-faye-embrace-the-day-savor-the-night/thumbnail.png";
import { OPP_AGENDA_SHIFTING_NARRATIVES } from "@/app/our-work/client-work-pages/opp-agenda-shifting-narratives.js";

export const EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT = new Project({
  hero_bg_img: BG,
  client_full_name: "Experience Fayetteville",
  project_title: "Embrace The Day, Savor The Night",
  tags: ["media planning & buying", "video production", "advertising"],
  awards: null,
  order: 5,
  main_headline: (
    <>
      Attracting tourists with the breadth and best of what Fayetteville has to
      offer.
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
      While there’s no shortage of Fayettevilles across the U.S. (14, to be
      exact), only one of them combines the natural splendor, artistic heritage,
      and hospitality of Fayetteville, Arkansas. Which is a good thing for us,
      since Outright works to boost its tourism as the Marketing Agency of
      Record for Experience Fayetteville. Leveraging our research and a strong
      existing brand identity, Outright’s campaigns team focused on touting the
      extent of what the city has to offer by visually pairing unexpected
      activities and interests—like gravel biking and fine dining.
      <br></br>
      <br></br>
      Carefully curated shots, captured across two days and 14 locations,
      showcase that breadth while authentically conveying the richness of
      Fayetteville’s spirit. Stills and motion effortlessly fit together across
      strategically placed programmatic and display ads as well as through media
      coverage in publications including NYT and Southern Living—all encouraging
      new audiences to dig deeper and explore this amazing destination for
      themselves. The new campaign not only sparked an increase in travel to
      Fayetteville but also the number of average nights spent there, compared
      to the previous year.
    </>
  ),
  prev_page: async () =>
    (await import("./opp-agenda-shifting-narratives"))
      .OPP_AGENDA_SHIFTING_NARRATIVES,
  next_page: async () =>
    (await import("./google-yt-connecting-beyond-coachella"))
      .GOOGLE_YT_CONNECTING_BEYOND_COACHELLA,
  slug: "/experience-fayetteville-embrace-the-day-savor-the-night",
  galleryThumbnail: EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT_THUMBNAIL,
});
