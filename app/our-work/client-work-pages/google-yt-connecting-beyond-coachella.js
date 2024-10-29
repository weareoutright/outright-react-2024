import Project from "./scripts/newProjectConstructor";
import BG from "./assets/google-yt-connecting-beyond-coachella/hero-bg.png";
import BENTO_TOP from "./assets/google-yt-connecting-beyond-coachella/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/google-yt-connecting-beyond-coachella/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/google-yt-connecting-beyond-coachella/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/google-yt-connecting-beyond-coachella/client-spotlight.png";
import GOOGLE_YT_CONNECTING_BEYOND_COACHELLA_THUMBNAIL from "./assets/google-yt-connecting-beyond-coachella/thumbnail.png";

export const GOOGLE_YT_CONNECTING_BEYOND_COACHELLA = new Project({
  hero_bg_img: BG,
  client_full_name: "Google / YouTube",
  project_title: "Connecting Beyond Coachella",
  tags: ["brand strategy", "visual identity", "design"],
  main_headline: (
    <>
      Didn&apos;t snag a ticket to Coachella? Sponsorships and swag help fans
      experience the action from home.
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
  speaker_org: "Google / Youtube",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      From crafting ad spots for Coachella x YouTube sponsorships to designing
      swag and giveaways, our campaigns and motion teams brought the festival
      experience directly to fans at home.
    </>
  ),
  prev_page: async () =>
    (await import("./google-yt-big-game-bigger-ads"))
      .GOOGLE_YT_BIG_GAME_BIGGER_ADS,
  next_page: async () =>
    (await import("./google-yt-youtube-shopping-beauty-fest"))
      .GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST,

  slug: "/google-youtube-connecting-beyond-coachella",
  galleryThumbnail: GOOGLE_YT_CONNECTING_BEYOND_COACHELLA_THUMBNAIL,
});
