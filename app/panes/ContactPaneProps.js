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
    containerClasses: ["center"],
    autoheight_responsive: true,
  },
  background: "white",
  order: "06",
  waypoint: "Contact",
  content: <ContactPane />,
};
