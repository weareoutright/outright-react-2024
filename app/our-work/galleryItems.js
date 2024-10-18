import dynamic from "next/dynamic";

const RTC = dynamic(() => import("./work-gallery-images/rtc-we-see-more.svg"), {
  ssr: false,
});
const ME_TOO = dynamic(
  () => import("./work-gallery-images/me-too-rebranding-a-movement.svg"),
  { ssr: false }
);
const MARRIOTT_HORIZONS = dynamic(
  () =>
    import("./work-gallery-images/marriott-intl-leading-to-new-horizons.svg"),
  { ssr: false }
);
const GOOGLE_YT_BIG_GAME = dynamic(
  () => import("./work-gallery-images/google-yt-big-game.svg"),
  { ssr: false }
);
const OP_AGENDA_NARRATIVES = dynamic(
  () => import("./work-gallery-images/op-agenda-shifting-narratives.svg"),
  { ssr: false }
);
const EXP_FAYETTEVILLE_EMBRACE_THE_DAY = dynamic(
  () => import("./work-gallery-images/ex-fayetteville-embrace-the-day.svg"),
  { ssr: false }
);
const GOOGLE_YT_COACHELLA = dynamic(
  () => import("./work-gallery-images/google-yt-coachella.svg"),
  { ssr: false }
);
const EDF_VISION_2023 = dynamic(
  () => import("./work-gallery-images/edf-vision-2023.svg"),
  { ssr: false }
);
const WRI_DATA_DRIVEN = dynamic(
  () => import("./work-gallery-images/wri-data-driven-revolution.svg"),
  { ssr: false }
);
const MODEV_NEW_ERA = dynamic(
  () => import("./work-gallery-images/modev-new-era.svg"),
  { ssr: false }
);
const PAIC_YOU_GOT_QUESTIONS = dynamic(
  () => import("./work-gallery-images/paic-you-got-questions.svg"),
  { ssr: false }
);
const GOOGLE_YT_BEAUTYFEST = dynamic(
  () => import("./work-gallery-images/google-yt-beautyfest.svg"),
  { ssr: false }
);
const WPA_PEOPLE_TOGETHER = dynamic(
  () => import("./work-gallery-images/wpa-people-together.svg"),
  { ssr: false }
);

export const GALLERY_ITEMS = [
  {
    svg: <RTC />,
    organization: "Rails to Trails Conservancy",
    title: "We See More than a Trail",
  },
  {
    svg: <ME_TOO />,
    organization: "me too. International",
    title: "Rebranding a Movement",
  },
  {
    svg: <MARRIOTT_HORIZONS />,
    organization: "Marriott International",
    title: "Leading to New Horizons",
  },
  {
    svg: <GOOGLE_YT_BIG_GAME />,
    organization: "Google/Youtube",
    title: "Big Game, Bigger Ads",
  },
  {
    svg: <OP_AGENDA_NARRATIVES />,
    organization: "The Opportunity Agenda",
    title: "Shifting Narratives",
  },
  {
    svg: <EXP_FAYETTEVILLE_EMBRACE_THE_DAY />,
    organization: "Experience Fayetteville",
    title: "Embrace the Day, Savor the Night",
  },
  {
    svg: <GOOGLE_YT_COACHELLA />,
    organization: "Google / Youtube",
    title: "Connecting Beyond Coachella",
  },
  {
    svg: <EDF_VISION_2023 />,
    organization: "Environmental Defense Fund",
    title: "Vision 2023",
  },
  {
    svg: <WRI_DATA_DRIVEN />,
    organization: "World Resource Institute",
    title: "Data-Driven Revolution",
  },
  {
    svg: <MODEV_NEW_ERA />,
    organization: "Modev",
    title: "AI Event for a New Era",
  },
  {
    svg: <PAIC_YOU_GOT_QUESTIONS />,
    organization: "Pennsylvania Immunization Coalition",
    title: "You've Got Questions",
  },
  {
    svg: <GOOGLE_YT_BEAUTYFEST />,
    organization: "Google/Youtube",
    title: "YouTube Shopping x #BeautyFest",
  },
  {
    svg: <WPA_PEOPLE_TOGETHER />,
    organization: "Washington Project for the Arts",
    title: "Art That Brings People Together",
  },
];
