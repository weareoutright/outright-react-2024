import Project from "./scripts/newProjectConstructor";
import BG from "./assets/wpa-art-that-brings-people-together/hero-bg.png";
import BENTO_TOP from "./assets/wpa-art-that-brings-people-together/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/wpa-art-that-brings-people-together/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/wpa-art-that-brings-people-together/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/wpa-art-that-brings-people-together/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/wpa-art-that-brings-people-together/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/wpa-art-that-brings-people-together/client-spotlight.png";

export const WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER = new Project({
  hero_bg_img: BG,
  client_full_name: "Washington Project for the Arts",
  project_title: "Art That Brings People Together",
  tags: ["branding", "ux/ui design", "website development"],
  main_headline: (
    <>Reimagining the digital experience for a DC-based arts organization.</>
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
      Inspired by the vibrant art scene in DC, the Washington Project for the
      Arts website redesign is bold, experimental, and as dynamic as the
      organization it reflects. The site&apos;s art-forward aesthetic and
      reorganization of projects, events, and resources helps bolster their
      mission to provide a community and platform for artists to thrive.
    </>
  ),
  prev_page: async () => (await import("./rtc-we-see-more")).RTC_WE_SEE_MORE,
  next_page: async () =>
    (await import("./wri-data-driven-revolution")).WRI_DATA_DRIVEN_REVOLUTION,
  slug: "/washington-project-of-the-arts-art-that-brings-people-together",
});
