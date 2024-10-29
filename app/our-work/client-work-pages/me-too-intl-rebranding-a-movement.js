import Project from "./scripts/newProjectConstructor";
import BG from "./assets/me-too-intl-rebranding-a-movement/hero-bg.png";
import BENTO_TOP from "./assets/me-too-intl-rebranding-a-movement/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/me-too-intl-rebranding-a-movement/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/me-too-intl-rebranding-a-movement/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/me-too-intl-rebranding-a-movement/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/me-too-intl-rebranding-a-movement/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/me-too-intl-rebranding-a-movement/client-spotlight.png";
import ME_TOO_REBRANDING_A_MOVEMENT_THUMBNAIL from "./assets/me-too-intl-rebranding-a-movement/thumbnail.png";

export const ME_TOO_REBRANDING_A_MOVEMENT = new Project({
  hero_bg_img: BG,
  client_full_name: "me too. International",
  project_title: "Rebranding a Movement",
  tags: ["branding", "research", "brand strategy"],
  main_headline: (
    <>Moving the organization behind the #metoo Movement beyond the hashtag.</>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      Outright has been an absolute joy to work with. We have worked with them
      on several projects to date and they have always gone out of their way to
      ensure that what they produce for us is deeply reflective of our voice and
      our vision. The staff is sharp, creative, efficient and accommodating.
      They understand and care about the work which only makes the working
      relationship more rich and rewarding. I highly recommend them to anyone
      who wants innovative and fresh work!
    </>
  ),
  speaker_name: "Tarana Burke",
  speaker_title: "Founder",
  speaker_org: "me too. International",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Founded by Tarana Burke in 2017 to combat sexual violence toward women of
      color, the me too. Movement organization was thrust into the spotlight
      when the hashtag #metoo dominated social media. However, the origin of the
      hashtag and the work of the organization behind it was lost in the noise.
      This misperception was a continuing challenge for the organization,
      leading &apos;me too.&apos; to work with Outright to craft a new brand
      identity that is unique, empowering, and inspired by communities they
      serve.
      <br />
      <br />
      Partnering with Outright, the &apos;me too.&apos; brand identity needed
      reimagining. It needed to do more than exist and inspire; it needed to
      stretch from the loud speaker to the more accessible counseling
      conversation, and to better reflect their impact, mission, and
      aspirations.
      <br />
      <br />
      Every visual detail of the rebrand is thoughtful, unique, and empowering —
      and inspired by Black artists, activists, and social movements. A collage
      effect of elements, textures, stylized photography, typography, a broad
      color palette, and a volume meter that allows the brand to stretch from
      survivor sanctuary to bold action
    </>
  ),
  prev_page: async () =>
    (await import("./marriott-intl-leading-to-new-horizons"))
      .MARRIOTT_INTL_NEW_HORIZONS,
  next_page: async () =>
    (await import("./modev-ai-event-for-a-new-era"))
      .MODEV_AI_EVENT_FOR_A_NEW_ERA,

  slug: "/me-too-intl-rebranding-a-movement",
  galleryThumbnail: ME_TOO_REBRANDING_A_MOVEMENT_THUMBNAIL,
});
