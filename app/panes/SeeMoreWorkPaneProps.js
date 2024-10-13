import SeeMoreWork from "./SeeMoreWorkPane";

export const pane = {
  hideTitle: true,
  attributes: {
    id: "see-more",
    containerClasses: ["left", "center"],
  },
  background: "chartreuse",
  order: "04",
  waypoint: "Work",
  content: <SeeMoreWork />,
};
