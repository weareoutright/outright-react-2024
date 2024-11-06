import SeeMoreWork from "./SeeMoreWorkPane";

export const pane = {
  hide_title: true,
  attributes: {
    id: "see-more",
    containerClasses: ["left", "center"],
  },
  background: "chartreuse",
  order: "04",
  waypoint: "Work",
  content: <SeeMoreWork />,
};
