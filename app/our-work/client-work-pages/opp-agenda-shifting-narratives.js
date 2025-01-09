import Project from "./scripts/newProjectConstructor";
import BG from "./assets/opp-agenda-shifting-narratives/hero-bg.png";
import BENTO_TOP from "./assets/opp-agenda-shifting-narratives/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/opp-agenda-shifting-narratives/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/opp-agenda-shifting-narratives/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/opp-agenda-shifting-narratives/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/opp-agenda-shifting-narratives/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/opp-agenda-shifting-narratives/client-spotlight.png";
import OPP_AGENDA_SHIFTING_NARRATIVES_THUMBNAIL from "./assets/opp-agenda-shifting-narratives/thumbnail.png";

export const OPP_AGENDA_SHIFTING_NARRATIVES = new Project({
  hero_bg_img: BG,
  client_full_name: "The Opportunity Agenda",
  project_title: "Shifting Narratives",
  tags: ["branding", "visual identity", "website development"],
  main_headline: (
    <>
        Shifting narratives and challenging systems of oppression with the power of a strong brand.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      Outright took the time to understand our vision and values, translating
      them into a bold and dynamic brand identity that truly captures our
      organization and resonates with our audiences who continue to express
      their admiration for our new look. We were so pleased with their work that
      we continued to collaborate with Outright on five additional sub-brands,
      each of which beautifully call back to our main brand while remaining
      distinct. The relationship we&apos;ve built with their wonderful, smart
      team has been a highlight of this journey. Their professionalism, insight,
      and dedication are truly commendable.
    </>
  ),
  speaker_name: "Rachel Reyes",
  speaker_title: "Director of Strategic Communications",
  speaker_org: "TOA",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
        Bringing activists and artists together to change the cultural narrative for equity and social justice for all has always been the work of The Opportunity Agenda (TOA). And while directly combating white supremacy as a means for doing that became prioritized for the organization, so was its need for a brand that genuinely reflected that. Armed with research and our own experiences, Outright set out building a bigger, bolder brand system to bolster TOA’s work—in dismantling other, more oppressive systems.
        <br></br>
      <br></br>
        This (r)evolution of the TOA brand actively invites a new wave of narrative change through a striking digital experience (featuring a new information architecture, fully dark-mode UI, and a comprehensive catalog of page templates with modular components) and an intersectionality-centered aesthetic that harmoniously uses high-velocity hues, a social-heavy visual identity, and a distinctive photography style. Five distinct-yet-familial sub-brands serving various audiences now work together in supporting and strengthening TOA’s mission.
    </>
  ),
  prev_page: async () =>
    (await import("./modev-ai-event-for-a-new-era"))
      .MODEV_AI_EVENT_FOR_A_NEW_ERA,
  next_page: async () =>
    (await import("./paic-youve-got-questions")).PAIC_YOUVE_GOT_QUESTIONS,

  slug: "/opp-agenda-shifting-narratives",
  galleryThumbnail: OPP_AGENDA_SHIFTING_NARRATIVES_THUMBNAIL,
});
