import Project from "./newProjectConstructor";
import BG from "./assets/wri-data-driven-revolution/hero-bg.png";
import BENTO_TOP from "./assets/wri-data-driven-revolution/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/wri-data-driven-revolution/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/wri-data-driven-revolution/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/wri-data-driven-revolution/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/wri-data-driven-revolution/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/wri-data-driven-revolution/client-spotlight.png";

export const WRI_DATA_DRIVEN_REVOLUTION = new Project({
  hero_bg_img: BG,
  client_full_name: "World Resources Institute",
  project_title: "Data-Driven Revolution / Visualizing Global Transformation",
  tags: ["data visualization", "branding", "ux strategy"],
  main_headline: (
    <>
      A one-of-its-kind open-source data platform that identifies shifts
      necessary to help transform all facets of our planet for the better.
    </>
  ),
  bento_top: BENTO_TOP,
  bento_bottom_left: BENTO_BOTTOM_LEFT,
  bento_bottom_mid: BENTO_BOTTOM_MID,
  bento_bottom_right: BENTO_BOTTOM_RIGHT,
  quote: (
    <>
      "The data is first class and I refer other people in the land sector to
      this website as the first port of call for data.
    </>
  ),
  speaker_name: "",
  speaker_title: "",
  speaker_org: "- International Organization",
  full_width_img: FULL_WIDTH_IMG,
  client_spotlight: CLIENT_SPOTLIGHT,
  project_overview: (
    <>
      Investing in yesterday&apos;s economy intensifies climate change,
      accelerates biodiversity loss, and deepens socioeconomic inequities.
      Instead, we should guide humanity toward a sustainable, prosperous, and
      just future for all. But how do we track where change is accelerating or
      faltering? Where is transformational change thriving, and where is it
      lagging? How do we synthesize complex global data into meaningful
      insights? And most importantly, how can we equip decision-makers and
      international organizations with this knowledge to prioritize actions that
      accelerate change?
      <br />
      <br />
      Enter Systems Change Lab, an immersive data visualization platform with
      over 500 indicators, each representing hundreds or thousands of data
      points. Our team designed every element, from color palette and font
      selection to how this complex data is visualized through charts and
      graphs. The result is a platform that distills vast amounts of information
      into actionable insights, empowering decision-makers to identify and
      prioritize the actions that drive transformative change.
    </>
  ),
  prev_page: "/rails-to-trails-conservancy-we-see-more-than-a-trail",
  next_page: "/washington-project-for-the-arts-art-that-brings-people-together",
});
