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
  client_full_name: "YouTube",
  project_title: "Bigger Game, Bigger Ads",
  tags: ["branding", "motion design", "visual identity"],
  main_headline: (
    <>
        Bringing YouTube’s A Game to the ad game after the big game.
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
  speaker_org: "YouTube",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
        Re-upping on snacks. Poorly-planned bathroom breaks. A general lack of interest in football. Whatever the excuse for missing the best ads of the year, there’s only one destination for catching them after the Super Bowl. YouTube AdBlitz racks up 1B+ views each year, so when they reached out for a rebrand that would help better showcase advertiser sponsorships while driving views and engagement, Outright ran with it.
      <br />
      <br />
        We reimagined their new visual identity in a way that captures the excitement and camaraderie of the NFL minus the overplayed sports clichés. By using graphical elements that deconstruct the game’s mechanics—from planned plays to watch parties and everything in between—the subsequent high-energy campaign flexes seamlessly between key art and co-sponsored ad spots, ensuring cohesion and brand recall, regardless of where viewers experience it.
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
