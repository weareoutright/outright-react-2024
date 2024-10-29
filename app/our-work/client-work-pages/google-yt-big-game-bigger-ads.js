import Project from "./scripts/newProjectConstructor";
import BG from "./assets/google-yt-big-game-bigger-ads/hero-bg.png";
import BENTO_TOP from "./assets/google-yt-big-game-bigger-ads/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/google-yt-big-game-bigger-ads/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/google-yt-big-game-bigger-ads/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/google-yt-big-game-bigger-ads/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/google-yt-big-game-bigger-ads/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/google-yt-big-game-bigger-ads/client-spotlight.png";
import GOOGLE_YT_BIG_GAME_BIGGER_ADS_THUMBNAIL from "./assets/google-yt-big-game-bigger-ads/thumbnail.png";

export const GOOGLE_YT_BIG_GAME_BIGGER_ADS = new Project({
  hero_bg_img: BG,
  client_full_name: "Google / YouTube",
  project_title: "Bigger Game, Bigger Ads",
  tags: ["branding", "campaign concepting", "motion design"],
  main_headline: (
    <>
      Key art for YouTube AdBlitz — the best place to watch ads from the biggest
      game.
    </>
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
      YouTube AdBlitz is the top destination for catching Super Bowl ads after
      the game, racking up over one billion views each year. Working with
      Outright to reimagine their visual identity, the new AdBlitz brand
      captures the NFL&apos;s camaraderie without falling into cliché territory,
      showcasing advertiser sponsorships while driving views and engagement with
      a distinct YouTube flair.
      <br />
      <br />
      It&apos;s a high-energy, refreshing twist on the big game, featuring
      graphical elements that deconstruct the game&apos;s mechanics—from planned
      plays to watch parties. The campaign is intentionally designed to flex
      between key art and co-sponsored ad spots, ensuring cohesion and brand
      recall, no matter where a viewer is experiencing it.
    </>
  ),
  prev_page: async () =>
    (await import("./exp-faye-embrace-the-day-savor-the-night"))
      .EXP_FAYE_EMBRACE_THE_DAY_SAVOR_THE_NIGHT,
  next_page: async () =>
    (await import("./google-yt-connecting-beyond-coachella"))
      .GOOGLE_YT_CONNECTING_BEYOND_COACHELLA,
  slug: "/google-youtube-big-game-bigger-ads",
  galleryThumbnail: GOOGLE_YT_BIG_GAME_BIGGER_ADS_THUMBNAIL,
});
