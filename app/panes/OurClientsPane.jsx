import YOUTUBE from "../assets/client-logos/youtube.svg";
import GOOGLE from "../assets/client-logos/google.svg";
import MARRIOTT from "../assets/client-logos/marriott.svg";
import ADIDAS from "../assets/client-logos/adidas.svg";
import OC from "../assets/client-logos/oc.svg";
import ME_TOO from "../assets/client-logos/me-too.svg";
import AARP from "../assets/client-logos/aarp.svg";
import SHARE_OUR_STRENGTH from "../assets/client-logos/share-our-strength.svg";
import WRI from "../assets/client-logos/wri.svg";

const OurClientsPane = () => {
  return (
    <div className="Clients">
      <h2>We work with...</h2>
      <div className="client-logos">
        <YOUTUBE className="youtube-logo" />
        <GOOGLE className="google-logo" />
        <MARRIOTT className="marriott-logo" />
        <ADIDAS className="adidas-logo" />
        <OC className="oc-logo" />
        <ME_TOO className="me-too-logo" />
        <AARP className="aarp-logo" />
        <SHARE_OUR_STRENGTH className="share-our-strength-logo" />
        <WRI className="wri-logo" />
      </div>
    </div>
  );
};

export default OurClientsPane;
