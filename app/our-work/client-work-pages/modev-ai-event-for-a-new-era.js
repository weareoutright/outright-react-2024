import Project from "./scripts/newProjectConstructor";
import BG from "./assets/modev-ai-new-era/hero-bg.png";
import BENTO_TOP from "./assets/modev-ai-new-era/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/modev-ai-new-era/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/modev-ai-new-era/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/modev-ai-new-era/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/modev-ai-new-era/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/modev-ai-new-era/client-spotlight.png";

export const MODEV_AI_NEW_ERA = new Project({
  hero_bg_img: BG,
  client_full_name: "Modev",
  project_title: "AI Event for a New Era",
  tags: ["brand strategy", "event", "video & motion"],
  main_headline: (
    <>
      An AI event brand illuminating a new era of creators (and creations) that
      are shaping our world. Launched at CES 2024. 
    </>
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
      Introducing “GNRT” (pronounced “generate”), a brand that captures the
      essence of the new world of AI creation. GNRT inspires all facets of AI to
      collaborate and blend together through a visual strategy that is deeply
      artistic and intentionally immersive. Abstract ink and bold typography
      embody the creativity within us and the innovative ways AI integrates into
      our lives.
      <br />
      <br />
      GNRT is dynamic, edgy, and empowering, with AI-generated art as a central
      element of its visual and photography strategy. Motion—both subtle and
      kinetic—plays a crucial role in experiencing the GNRT brand, making it a
      vibrant, living entity.
    </>
  ),
  prev_page: async () =>
    (await import("./me-too-intl-rebranding-a-movement"))
      .ME_TOO_REBRANDING_A_MOVEMENT,
  next_page: async () =>
    (await import("./opp-agenda-shifting-narratives"))
      .OPP_AGENDA_SHIFTING_NARRATIVES,

  slug: "/modev-ai-event-for-a-new-era",
});
