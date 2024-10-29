import Project from "./scripts/newProjectConstructor";
import BG from "./assets/paic-youve-got-questions/hero-bg.png";
import BENTO_TOP from "./assets/paic-youve-got-questions/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/paic-youve-got-questions/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/paic-youve-got-questions/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/paic-youve-got-questions/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/paic-youve-got-questions/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/paic-youve-got-questions/client-spotlight.png";

export const PAIC_YOUVE_GOT_QUESTIONS = new Project({
  hero_bg_img: BG,
  client_full_name: "Pennsylvania Immunization Coalition",
  project_title: "You've Got Questions",
  tags: ["campaigns", "motion design", "microsites"],
  main_headline: (
    <>A vaccination education campaign that cuts through the noise. </>
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
      In a crowded public health landscape, our campaign for Pennsylvania
      Immunization Coalition cut through the noise with a simple,
      stop-the-scroll approach. Quirky, attention-grabbing photos and headlines
      speak directly to parents&apos; feelings of overwhelm and confusion about
      vaccines. A vibrant palette of saturated colors paired with soft pastels
      allowed the campaign to transition seamlessly between eye-catching visuals
      and a more nuanced, approachable tone.
    </>
  ),
  prev_page: async () =>
    (await import("./opp-agenda-shifting-narratives"))
      .OPP_AGENDA_SHIFTING_NARRATIVES,
  next_page: async () => (await import("./rtc-we-see-more")).RTC_WE_SEE_MORE,

  slug: "/paic-youve-got-questions",
});
