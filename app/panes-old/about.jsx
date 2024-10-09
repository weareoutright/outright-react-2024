const paneData = {
  title: "With the<br> right people, anything is possible …",
  attributes: {
    id: "about",
    autoheight_responsive: true,
    containerClasses: ["center"],
  },
  background: "black",
  order: 9,
  waypoint: "Who We Are",
};

const AboutPane = () => {
  return (
    <div>
      <p>Without you, there would be no us.</p>

      <p>
        Our passion and commitment to the quality of our work paired with our
        boundless imagination is what creates our salient and differentiating
        edge. We’re not here to just do the work; we’re here to tell your story
        in a way that has, quite literally, never been told before.
      </p>

      <p>
        How do we do it, you ask? By pushing limits, questioning the
        already-existing, and inspiring the world around us in impactful,
        made-you-look kind of ways. Weave in a feverish zest for simply
        creating, and you have yourself a team of artists and strategists who
        are driven to rethink, reshape, and redefine.
      </p>

      <p>
        We’re a proud woman- and minority-owned business that thrives on
        changing the narrative through the power of design. And, with you on
        board, we’re doing it together.
      </p>
    </div>
  );
};

export default AboutPane;
