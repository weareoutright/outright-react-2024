import LOGO_O from "../assets/logo-o.svg";
import LOGO_FULL from "../assets/logo-outright-dark.svg";

const TitleLogo = ({
  classes = "page-utility-component page-utility-upper page-utility-left page-utility-page",
  id = "site-branding",
  href = "/",
}) => {
  return (
    <div className={classes}>
      <div id={id}>
        {/*<a href={href}>*/}
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
              <a className="link" href="/our-work">
                work
              </a>
              <a className="link" href="/team">
                who we are
              </a>
            </div>
          </h1>
        {/*</a>*/}
      </div>
    </div>
  );
};

export default TitleLogo;
