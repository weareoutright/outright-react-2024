import Project from "./scripts/newProjectConstructor";
import BG from "./assets/paic-youve-got-questions/hero-bg.png";
import BENTO_TOP from "./assets/paic-youve-got-questions/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/paic-youve-got-questions/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/paic-youve-got-questions/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/paic-youve-got-questions/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/paic-youve-got-questions/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/paic-youve-got-questions/client-spotlight.png";
import PAIC_YOUVE_GOT_QUESTIONS_THUMBNAIL from "./assets/paic-youve-got-questions/thumbnail.png";

export const PAIC_YOUVE_GOT_QUESTIONS = new Project({
  hero_bg_img: BG,
  client_full_name: "Pennsylvania Immunization Coalition",
  project_title: "You've Got Questions",
  tags: ["media planning & buying", "video & motion", "microsites"],
  main_headline: (
    <>Arming PA parents with accurate, actionable information about vaccines. </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
    </>
  ),
  speaker_name: "",
  speaker_title: "",
  speaker_org: "",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Between all the mis-, dis-, or lack of information out there about vaccines, it’s no wonder Pennsylvania parents of children and teens have so many questions. Yet, despite focus groups with local providers and community members echoing that confusion, the Pennsylvania Immunization Coalition (PAIC) still struggled to educate them on this potentially life-saving topic. Outright understood, responding with a simple, visually arresting, stop-the-scroll approach grounded in research insights  that quickly cut through the already crowded public health landscape.
      <br/>
      <br/>
      Quirky, attention-grabbing photos and headlines empathetically tapped into parents’ sense of confusion and overwhelm surrounding vaccinations, while a thoughtful saturated color palette paired with soft pastels created a natural bridge between the bold visuals and a more nuanced, serious tone. The campaign was disseminated across online video, display and native ads, strategically targeting vaccine-hesitant parents through advanced audience targeting capabilities. Generating more than 26M impressions with PA parents and quickly surpassing industry benchmarks for click-through and video completion rates, viewers landed at GetAnswersPA.org, a simple, intuitive hub for trustworthy information, links, and testimonials.
    </>
  ),
  prev_page: async () =>
    (await import("./opp-agenda-shifting-narratives"))
      .OPP_AGENDA_SHIFTING_NARRATIVES,
  next_page: async () => (await import("./rtc-we-see-more")).RTC_WE_SEE_MORE,

  slug: "/paic-youve-got-questions",
  galleryThumbnail: PAIC_YOUVE_GOT_QUESTIONS_THUMBNAIL,
});
