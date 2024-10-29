import Project from "./scripts/newProjectConstructor";
import BG from "./assets/marriott-intl-leading-to-new-horizons/hero-bg.png";
import BENTO_TOP from "./assets/marriott-intl-leading-to-new-horizons/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/marriott-intl-leading-to-new-horizons/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/marriott-intl-leading-to-new-horizons/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/marriott-intl-leading-to-new-horizons/client-spotlight.png";
import MARRIOTT_INTL_NEW_HORIZONS_THUMBNAIL from "./assets/marriott-intl-leading-to-new-horizons/thumbnail.png";

export const MARRIOTT_INTL_NEW_HORIZONS = new Project({
  hero_bg_img: BG,
  client_full_name: "Marriott International",
  project_title: "Leading to New Horizons",
  tags: ["naming", "visual identity", "brand strategy"],
  main_headline: (
    <>
      A new visual identity for one of Marriott International&apos;s executive
      advancement programs. / A new visual identity helping Marriott
      International&apos;s visionary leaders navigate their careers. / Marriott
      International&apos;s reimagined executive advancement program propels
      visionary leaders forward.
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
  speaker_title: "Chief Communcations Officer",
  speaker_org: "me too. International",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      As a long-time client of Outright, Marriott International turned to our
      creative experts to craft a distinctive identity for their new leadership
      program. Our team of creative strategists developed a fresh identity named
      “En Route,” inspired by the unique and invaluable journey that shapes
      individuals throughout their careers.
      <br />
      <br />
      Every element of this visual identity reflects the experiences that build
      great leaders. The color palette draws from diverse competencies, while a
      custom pattern echoes career trajectories and milestones. En Route&apos;s
      photography is authentic, with a tangible sense of place and self. Bold,
      concise headlines connect directly with Associates&apos; aspirations for
      professional and personal growth.
    </>
  ),
  prev_page: async () =>
    (await import("./google-yt-youtube-shopping-beauty-fest"))
      .GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST,
  next_page: async () =>
    (await import("./me-too-intl-rebranding-a-movement"))
      .ME_TOO_REBRANDING_A_MOVEMENT,

  slug: "/marriott-intl-leading-to-new-horizons",
  galleryThumbnail: MARRIOTT_INTL_NEW_HORIZONS_THUMBNAIL,
});
