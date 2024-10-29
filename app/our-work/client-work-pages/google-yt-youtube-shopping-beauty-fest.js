import Project from "./scripts/newProjectConstructor";
import BG from "./assets/google-yt-beauty-fest/hero-bg.png";
import BENTO_TOP from "./assets/google-yt-beauty-fest/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/google-yt-beauty-fest/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/google-yt-beauty-fest/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/google-yt-beauty-fest/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/google-yt-beauty-fest/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/google-yt-beauty-fest/client-spotlight.png";

// prev_page & next_page slug imports

export const GOOGLE_YT_BEAUTY_FEST = new Project({
  hero_bg_img: BG,
  client_full_name: "Google / YouTube",
  project_title: "YouTube Shopping x #BeautyFest",
  tags: ["branding", "video & motion", "sizzles"],
  main_headline: (
    <>A fresh look for YouTube Shopping&apos;s annual beauty event.</>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      A massive thank you to you and the team for your great
      work...Outright&apos;s quality of work and quickness allowed us to truly
      put our best foot forward and the partnership is so appreciated.
    </>
  ),
  speaker_name: "Kristen Schwartz",
  speaker_title: "Senior Video Strategy Lead",
  speaker_org: "Google / Youtube",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      A refreshed look for YouTube Shopping&apos;s beauty event of the year,
      #BeautyFest. This updated design is simple yet elevated, seamlessly
      adapting from sizzle reels and creator collaborations to static campaign
      graphics. #BeautyFest&apos;s new visual identity enhances every aspect of
      the event, making it more vibrant and engaging than ever before.
    </>
  ),
  prev_page: async () =>
    (await import("./google-yt-connecting-beyond-coachella"))
      .GOOGLE_YT_CONNECTING_BEYOND_COACHELLA,
  next_page: async () =>
    (await import("./marriott-intl-leading-to-new-horizons"))
      .MARRIOTT_INTL_NEW_HORIZONS,
  slug: "/google-youtube-shopping-beauty-fest",
});
