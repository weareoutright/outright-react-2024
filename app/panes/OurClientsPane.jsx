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
      <h2>We work with...</h2>
      <div className="client-logos">
        <YOUTUBE className="youtube-logo" />
        <GOOGLE className="google-logo" />
        <MARRIOTT className="marriott-logo" />
        <NHL className="nhl-logo" />
        <OC className="oc-logo" />
        <ME_TOO className="me-too-logo" />
        <EF className="ef-logo" />
        <KABOOM className="kaboom-logo" />
        <RTC className="rtc-logo" />
        <ADIDAS className="adidas-logo" />
        <WRI className="wri-logo" />
        <RWJ className="rwj-logo" />
      </div>
    </div>
  );
};

export default OurClientsPane;
