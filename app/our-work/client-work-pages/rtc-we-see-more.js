import Project from "./scripts/newProjectConstructor";
import BG from "./assets/rtc-we-see-more/hero-bg.png";
import BENTO_TOP from "./assets/rtc-we-see-more/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/rtc-we-see-more/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/rtc-we-see-more/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/rtc-we-see-more/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/rtc-we-see-more/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/rtc-we-see-more/client-spotlight.png";

export const RTC_WE_SEE_MORE = new Project({
  hero_bg_img: BG,
  client_full_name: "Rails to Trails Conservancy",
  project_title: "We See More Than a Trail",
  tags: ["brand strategy", "branding", "research"],
  main_headline: (
    <>
      Rebrand blazes a new trail for a leading national outdoors nonprofit
      organization. 
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
      Founded in 1986, Rails to Trails Conservancy (RTC) has always been about
      transforming public spaces into vibrant, active pathways for walking,
      biking, and outdoor fun. As the organization evolved, it needed a fresh
      brand to showcase its expanded mission beyond rail-trails and to attract a
      younger, more diverse group of outdoor enthusiasts and partners—all while
      keeping the trust and love of its current community.
      <br />
      <br />
      RTC teamed up with Outright and research partner Vanguard Communications
      to dig deep into the hearts and minds of their audience through extensive
      research and focus groups. The result? A brand that feels like a perfect
      day outside, radiates joy, and brings a breath of fresh air to the
      outdoors nonprofit space. A new logo system, a custom pattern, inclusive
      photography, and a vibrant color palette all inspired by the experience of
      a day outdoors.
    </>
  ),
  prev_page: async () =>
    (await import("./paic-youve-got-questions")).PAIC_YOUVE_GOT_QUESTIONS,
  next_page: async () =>
    (await import("./wpa-art-that-brings-people-together"))
      .WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER,
  slug: "rails-to-trails-conservancy-we-see-more-than-a-trail",
});
