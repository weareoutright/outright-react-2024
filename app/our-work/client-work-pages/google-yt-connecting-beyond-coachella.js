import Project from "./scripts/newProjectConstructor";
import BG from "./assets/google-yt-connecting-beyond-coachella/hero-bg.png";
import BENTO_TOP from "./assets/google-yt-connecting-beyond-coachella/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/google-yt-connecting-beyond-coachella/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/google-yt-connecting-beyond-coachella/client-spotlight.png";
import GOOGLE_YT_CONNECTING_BEYOND_COACHELLA_THUMBNAIL from "./assets/google-yt-connecting-beyond-coachella/thumbnail.png";
import {
    EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT
} from "@/app/our-work/client-work-pages/exp-faye-embrace-the-day-savor-the-night.js";

export const GOOGLE_YT_CONNECTING_BEYOND_COACHELLA = new Project({
  hero_bg_img: BG,
  client_full_name: "YouTube",
  project_title: "Connecting Beyond Coachella",
  tags: ["campaigns", "video & motion", "sizzles"],
    awards: ["award"],
  main_headline: (
    <>
        Helping fans enjoy the best of Coachella—from the comfort of the couch.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      I LOVE THIS!! So excited to see it come to life as I think it can be a
      great example moving forward and would want to partner on more of these
      ideas with you!
    </>
  ),
  speaker_name: "Lori Schak",
  speaker_title: "Sponsorship Deal Lead",
  speaker_org: "YouTube",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Every year, thousands of people descend upon the desert to experience three days of aural bliss at one of the most well-recognized, well-produced music festivals around. Over the last twenty years, Coachella has blown up—attracting an impressively dense lineup of world-famous artists and throngs of attendees from all over the world. But, successfully snagging a ticket isn’t easy—or always even possible. That’s where we came in.
      <br />
      <br />
      For those without airfare and a wristband for the 2025 event, Outright partnered with YouTube to create a festival experience all fans can enjoy. Our campaigns and motion teams concepted and brought to life an integrated Coachella x YouTube sponsorship campaign, complete with everything from display ads and brand collabs to custom swag and giveaways to amp up online engagement and bring the hype home.
    </>
  ),
  prev_page: async () =>
    (await import("./exp-faye-embrace-the-day-savor-the-night"))
      .EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT,
  next_page: async () =>
    (await import("./edf-vision-2030"))
      .EDF_VISION_2030,

  slug: "/google-youtube-connecting-beyond-coachella",
  galleryThumbnail: GOOGLE_YT_CONNECTING_BEYOND_COACHELLA_THUMBNAIL,
});
