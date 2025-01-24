import Project from "./scripts/newProjectConstructor";
import BG from "./assets/rtc-we-see-more/hero-bg.png";
import BENTO_TOP from "./assets/rtc-we-see-more/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/rtc-we-see-more/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/rtc-we-see-more/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/rtc-we-see-more/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/rtc-we-see-more/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/rtc-we-see-more/client-spotlight.png";
import RTC_WE_SEE_MORE_THUMBNAIL from "./assets/rtc-we-see-more/thumbnail.png";
import { ME_TOO_REBRANDING_A_MOVEMENT } from "@/app/our-work/client-work-pages/me-too-intl-rebranding-a-movement.js";

export const RTC_WE_SEE_MORE = new Project({
  hero_bg_img: BG,
  client_full_name: "Rails to Trails Conservancy",
  project_title: "We See More Than a Trail",
  tags: ["brand strategy", "branding", "visual identity"],
  awards: null,
  order: 1,
  main_headline: (
    <>
      Veering off the beaten path so an outdoor nonprofit can blaze new trials. 
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      The entire organization is just buzzing about the depth and artistry of
      the brand. Your smart, thoughtful approach has been appreciated by our
      team and the board. I am so motivated by all that comes next and feel like
      we are set up well to really shift the reach, relevance and influence of
      the organization.
    </>
  ),
  speaker_name: "Brandi Horton",
  speaker_title: "VP of Communications",
  speaker_org: "Rails to Trails Conservancy",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Creating a nationwide network of trails connecting people, places, and the
      benefits of being outdoors. That’s been Rails to Trails Conservancy’s
      (RTC) mission since 1986. Recently, attracting younger, more diverse
      outdoor enthusiasts and partners has become a priority, saddling RTC with
      the need to expand its reach without losing any hard-earned equity within
      the existing community.
      <br />
      <br />
      Of course, evolving the organization meant evolving the brand. So Outright
      gleaned insights from extensive research and focus groups with trail
      advocates, done by research partners, Vanguard Communications. From there,
      we breathed fresh air into this legacy nonprofit by crafting a bold and
      impactful, yet inviting aesthetic—including a new logo system, custom
      pattern, inclusive photography, and a meaningful color palette. Now, armed
      with this strategically evolved identity, RTC is inspiring new (and
      existing) members to tap into the joy, vibrancy and connection of leaning
      into life out on the trail.
    </>
  ),
  prev_page: async () =>
    (await import("./wpa-art-that-brings-people-together"))
      .WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER,
  next_page: async () =>
    (await import("./me-too-intl-rebranding-a-movement"))
      .ME_TOO_REBRANDING_A_MOVEMENT,
  slug: "/rails-to-trails-conservancy-we-see-more-than-a-trail",
  galleryThumbnail: RTC_WE_SEE_MORE_THUMBNAIL,
});
