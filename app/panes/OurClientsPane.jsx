import YOUTUBE from "../assets/client-logos/youtube.svg";
import GOOGLE from "../assets/client-logos/google.svg";
import MARRIOTT from "../assets/client-logos/marriott.svg";
import ADIDAS from "../assets/client-logos/adidas.svg";
import OC from "../assets/client-logos/oc.svg";
import ME_TOO from "../assets/client-logos/me-too.svg";
import WRI from "../assets/client-logos/wri.svg";
import NHL from "../assets/client-logos/nhl.svg";
import EF from "../assets/client-logos/ef.svg";
import KABOOM from "../assets/client-logos/kaboom.svg";
import RTC from "../assets/client-logos/rtc.svg";
import RWJ from "../assets/client-logos/rwj.svg";

const OurClientsPane = () => {
  return (
    <div className="Clients">
      <h2>Our work speaks for itself. And for the clients we work with.</h2>
      <div className="client-logos">
        <div className="logo-inner">
          <YOUTUBE className="youtube-logo" />
        </div>
        <div className="logo-inner">
          <GOOGLE className="google-logo" />
        </div>
        <div className="logo-inner">
          <MARRIOTT className="marriott-logo" />
        </div>
        <div className="logo-inner">
          <NHL className="nhl-logo" />
        </div>
        <div className="logo-inner">
          <OC className="oc-logo" />
        </div>
        <div className="logo-inner">
          <ME_TOO className="me-too-logo" />
        </div>
        <div className="logo-inner">
          <EF className="ef-logo" />
        </div>
        <div className="logo-inner">
          <KABOOM className="kaboom-logo" />
        </div>
        <div className="logo-inner">
          <RTC className="rtc-logo" />
        </div>
        <div className="logo-inner">
          <ADIDAS className="adidas-logo" />
        </div>
        <div className="logo-inner">
          <WRI className="wri-logo" />
        </div>
        <div className="logo-inner">
          <RWJ className="rwj-logo" />
        </div>
      </div>
    </div>
  );
};

export default OurClientsPane;
