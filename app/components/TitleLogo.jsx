import Image from "next/image";
import LOGO_O from "../assets/logo-o.svg";
import LOGO_FULL from "../assets/logo-outright-dark.svg";

const TitleLogo = () => {
  return (
    <h1 className="title-logo">
      <a href="/" className="header-logo-nav">
        <span className="title-logo-img">
          <LOGO_O />
        </span>
        <span className="title-logo-img-full">
          <LOGO_FULL />
        </span>
      </a>
      <span>outright</span>
      <div className="nav-links">
        <a className="link" href="#youtube">
          featured
        </a>
        <a className="link" href="/work">
          work
        </a>
        <a className="link" href="#clientscover">
          clients
        </a>
        <a className="link" href="#about">
          who we are
        </a>
        <a className="link" href="/team">
          team
        </a>
        <a className="link" href="#services">
          approach
        </a>
      </div>
    </h1>
  );
};

export default TitleLogo;
