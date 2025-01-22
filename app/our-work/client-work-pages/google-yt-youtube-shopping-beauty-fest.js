import Project from "./scripts/newProjectConstructor";
import BG from "./assets/google-yt-youtube-shopping-beauty-fest/hero-bg.png";
import BENTO_TOP from "./assets/google-yt-youtube-shopping-beauty-fest/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/google-yt-youtube-shopping-beauty-fest/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/google-yt-youtube-shopping-beauty-fest/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/google-yt-youtube-shopping-beauty-fest/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/google-yt-youtube-shopping-beauty-fest/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/google-yt-youtube-shopping-beauty-fest/client-spotlight.png";
import GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST_THUMBNAIL from "./assets/google-yt-youtube-shopping-beauty-fest/thumbnail.png";
import { PAIC_YOUVE_GOT_QUESTIONS } from "@/app/our-work/client-work-pages/paic-youve-got-questions.js";

export const GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST = new Project({
  hero_bg_img: BG,
  client_full_name: "YouTube",
  project_title: "YouTube Shopping x #BeautyFest",
  tags: ["branding", "video & motion", "campaigns"],
  awards: null,
  main_headline: (
    <>Putting a fresh face on a growing live-stream beauty event.</>
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
      Once a year, hot celebs and even hotter brands converge at #BeautyFest,
      YouTube Shopping’s live-stream event in praise—and purchase—of all things
      beauty. Knowing 2023 was primed to be #BeautyFest’s most successful year
      yet, Outright was called in to give it a signature seasonal style.
      <br />
      <br />
      The revamped look in a word? Demure. Its simple-yet-elevated design
      seamlessly stretches from sizzle reels and creator collaborations to
      static campaign graphics. The entirely updated visual identity tied
      together and flowed throughout every aspect of the event—making it a more
      vibrant and engaging experience for beauty product lovers.
    </>
  ),
  prev_page: async () =>
    (await import("./paic-youve-got-questions")).PAIC_YOUVE_GOT_QUESTIONS,
  next_page: async () =>
    (await import("./wpa-art-that-brings-people-together"))
      .WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER,
  slug: "/google-youtube-shopping-beauty-fest",
  galleryThumbnail: GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST_THUMBNAIL,
});
