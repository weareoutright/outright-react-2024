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
  tags: ["brand strategy", "branding", "visual identity", ],
  main_headline: (
    <>Moving the organization behind the #metoo Movement to the forefront.</>
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
        #metoo exploded on social media in 2017, as a movement created to combat sexual violence toward women of color. That’s when the hashtag’s viral dominance eclipsed the true origins of this culture-shaping organization and the vital work it had been doing since its inception in 2006. It was at this point that founder, Tarana Burke, knew reclaiming their identity and strengthening their narrative was a must, so she turned to Outright to help.
      <br />
      <br />
        Mindful of the brand’s intrinsic need to be as unique and empowering as the communities they serve, we got to work. Black artists, activists, and social movements provided inspiration and a lens for crafting a brand that was dynamic and resilient. Rich textures, stylized photography, expressive typography, and an expansive color palette create a functional and nuanced brand system with elements that can be dialed up and down to resonate with audiences more deeply—whether the organization is speaking as a sanctuary for healing or a survivor activation system.
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
