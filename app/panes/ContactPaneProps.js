import ContactPane from "./ContactPane";

export const pane = {
  hideTitle: true,
  attributes: {
    id: "contact",
    containerClasses: ["left"],
    autoheight: true,
    autoheight_responsive: true,
  },
  background: "black",
  order: "06",
  waypoint: "Contact",
  content: <ContactPane />,
};
