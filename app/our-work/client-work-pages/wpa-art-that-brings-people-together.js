import Project from "./scripts/newProjectConstructor.mjs";
import BG from "./assets/wpa-art-that-brings-people-together/hero-bg.png";
import BENTO_TOP from "./assets/wpa-art-that-brings-people-together/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/wpa-art-that-brings-people-together/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/wpa-art-that-brings-people-together/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/wpa-art-that-brings-people-together/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/wpa-art-that-brings-people-together/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/wpa-art-that-brings-people-together/client-spotlight.png";
import WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER_THUMBNAIL from "./assets/wpa-art-that-brings-people-together/thumbnail.png";

export const WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER = new Project({
  hero_bg_img: BG,
  client_full_name: "Washington Project for the Arts",
  project_title: "Art That Brings People Together",
  tags: ["ux/ui design", "website development", "graphic design"],
  awards: null,
  order: 12,
  main_headline: (
    <>
      Supporting an experimental arts community with a more experiential online
      hub.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: null,
  speaker_name: "",
  speaker_title: "",
  speaker_org: "",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Locally, the Washington Project for the Arts (WPA) is known for supporting
      myriad DC-area artist-led events—including more than 1,000 performances,
      500 exhibitions, 58 public art projects, and much more. But nationally,
      the WPA is still probably most well known for stepping in to present
      Robert Mapplethorpe’s exhibit The Perfect Moment, as a middle finger to
      censorship during the 90s culture wars after being canceled at the last
      minute by its original gallery for being too “visually obscene.”
      <br />
      <br />
      So when Outright was brought in to redesign the website for this bold,
      experimental, tone-setting organization, we knew its digital presence
      needed to reflect that—while also presenting an intuitive destination for
      curators, researchers, artists, and patrons. Custom features infused
      throughout create an immersive, gallery-like front-end experience for the
      entire arts community while providing WPA with a manageable content entry
      system for better supporting their expanded mission.
    </>
  ),
  prev_page: async () =>
    (await import("./google-yt-youtube-shopping-beauty-fest"))
      .GOOGLE_YT_YOUTUBE_SHOPPING_BEAUTY_FEST,
  next_page: async () => (await import("./rtc-we-see-more.js")).RTC_WE_SEE_MORE,
  slug: "/washington-project-of-the-arts-art-that-brings-people-together",
  galleryThumbnail: WPA_ART_THAT_BRINGS_PEOPLE_TOGETHER_THUMBNAIL,
});
