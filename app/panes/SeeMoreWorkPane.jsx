import ICON_CHEVRON_DOWN from "../assets/icon-chevron-down.svg";

const SeeMoreWork = () => {
  return (
    <div className="see-more-work">
      <div className="header-text">
        <h1 className="no-list">Want more?</h1>
        <br />
        <h2>
          Check Out Our <span>Work.</span>
        </h2>
      </div>
      <br />
      <a href="/">
        <ICON_CHEVRON_DOWN className="right-chevron" />
      </a>
    </div>
  );
};

export default SeeMoreWork;
