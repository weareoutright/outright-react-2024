import OurClientsPane from "./OurClientsPane";

export const pane = {
  hideTitle: true,
  attributes: {
    id: "clients",
    containerClasses: ["left", "center"],
  },
  background: "white",
  order: "05",
  waypoint: "Our Clients",
  content: <OurClientsPane />,
};
