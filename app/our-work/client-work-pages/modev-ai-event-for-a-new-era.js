import Project from "./scripts/newProjectConstructor";
import BG from "./assets/modev-ai-event-for-a-new-era/hero-bg.png";
import BENTO_TOP from "./assets/modev-ai-event-for-a-new-era/bento-top.png";
import BENTO_BOTTOM_LEFT from "./assets/modev-ai-event-for-a-new-era/bento-bottom-left.png";
import BENTO_BOTTOM_MID from "./assets/modev-ai-event-for-a-new-era/bento-bottom-mid.png";
import BENTO_BOTTOM_RIGHT from "./assets/modev-ai-event-for-a-new-era/bento-bottom-right.png";
import FULL_WIDTH_IMG from "./assets/modev-ai-event-for-a-new-era/full-width-img.png";
import CLIENT_SPOTLIGHT from "./assets/modev-ai-event-for-a-new-era/client-spotlight.png";
import MODEV_AI_EVENT_FOR_A_NEW_ERA_THUMBNAIL from "./assets/modev-ai-event-for-a-new-era/thumbnail.png";
import {WRI_DATA_DRIVEN_REVOLUTION} from "@/app/our-work/client-work-pages/wri-data-driven-revolution.js";

export const MODEV_AI_EVENT_FOR_A_NEW_ERA = new Project({
  hero_bg_img: BG,
  client_full_name: "Modev",
  project_title: "AI Event for a New Era",
  tags: ["branding", "events & environmental", "video & motion"],
  awards: ["award"],
  main_headline: (
    <>
        Inspiring the future of AI innovation, one conference attendee at a time. 
    </>
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
        Unless you live under a rock (that doesn’t have wi-fi), it’s hard not to see the ways AI is bleeding into every aspect of our lives. But how do we make sure all facets of AI collaborate and blend together in ways that change our world for the better? Enter GNRT.AI. An event created to support and accelerate global innovations in augmented-intelligence. To do that well, the GNRT (pronounced “generate”) brand experience had to live up to the hype surrounding this technology. That’s when Modev (the creator of the event) tagged Outright to make it happen.
      <br />
      <br />
        After our team imagined  GNRT’s original squid-inspired mark, we stretched our tentacles further into the deep-sea metaphor, to accentuate the innate immersive fluidity of the brand, while making it feel even more intelligent and alive. Continuous motion—both subtle and kinetic—ushers attendees through every aspect of the event, from registration to the final demo. Abstract ink flows into bold typography and custom AI-generated portraits (meant to work across digital touch screens, edgy swag, animated speaker backgrounds, and more) to visually represent and inspire the ways augmented intelligence is weaving its way into every aspect of our lives.
    </>
  ),
  prev_page: async () =>
    (await import("./wri-data-driven-revolution"))
      .WRI_DATA_DRIVEN_REVOLUTION,
  next_page: async () =>
    (await import("./paic-youve-got-questions"))
      .PAIC_YOUVE_GOT_QUESTIONS,

  slug: "/modev-ai-event-for-a-new-era",
  galleryThumbnail: MODEV_AI_EVENT_FOR_A_NEW_ERA_THUMBNAIL,
});
