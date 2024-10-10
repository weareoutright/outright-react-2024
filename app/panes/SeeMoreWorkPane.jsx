import ICON_CHEVRON_DOWN from "../assets/icon-chevron-down.svg";

const SeeMoreWork = () => {
  return (
    <div className="see-more-work">
      <h1 className="no-list">
        Want more?
        <br />
        Check out
        <br />
        our <span>work.</span>
        <br />
      </h1>
      <a href="/">
        <ICON_CHEVRON_DOWN />
      </a>
    </div>
  );
};

export default SeeMoreWork;
