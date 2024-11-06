import ContactPane from "./ContactPane";

export const pane = {
  title: (
    <>
      Hit
      <br /> our DMs.
    </>
  ),
  attributes: {
    id: "contact",
    containerClasses: ["left"],
    autoheight_responsive: true,
  },
  background: "white",
  order: "08",
  waypoint: "Contact",
  content: <ContactPane />,
};
