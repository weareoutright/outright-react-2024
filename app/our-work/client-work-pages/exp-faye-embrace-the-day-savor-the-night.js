import Project from "./scripts/newProjectConstructor";
import BG from "./assets/exp-faye-embrace-the-day/hero-bg.png";
import BENTO_TOP from "./assets/exp-faye-embrace-the-day/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/exp-faye-embrace-the-day/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/exp-faye-embrace-the-day/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/exp-faye-embrace-the-day/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/exp-faye-embrace-the-day/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/exp-faye-embrace-the-day/client-spotlight.png";

export const EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT = new Project({
  hero_bg_img: BG,
  client_full_name: "Experience Fayetteville",
  project_title: "Embrace The Day, Savor The Night",
  tags: ["media planning & buying", "campaigns", "motion design"],
  main_headline: (
    <>
      Discover the unexpected in Fayetteville, Arkansas tourism marketing
      campaign.
    </>
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
      As Experience Fayetteville&apos;s Marketing Agency of Record, our team is
      tasked with boosting tourism in Fayetteville, Arkansas. Our team imagined
      a campaign concept showcasing the wide range of what the city of
      Fayetteville has to offer. Headlines entice new visitors by pairing
      unexpected interests together — like gravel biking and fine dining — with
      a reveal that it&apos;s all found in Fayetteville.
      <br></br>
      <br></br>
      Syndicated across digital platforms, the ads are designed to be
      eye-catching, surprising, and artistically inspired, reflecting the
      city&apos;s rich artistic heritage. Each headline and visual invites new
      visitors to explore the unique and unexpected experiences that
      Fayetteville has to offer.
    </>
  ),
  prev_page: async () => (await import("./edf-vision-2023")).EDF_VISION_2023,
  next_page: async () =>
    (await import("./google-yt-big-game-bigger-ads"))
      .GOOGLE_YT_BIG_GAME_BIGGER_ADS,
  slug: "/experience-fayetteville-embrace-the-day-savor-the-night",
});
