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
            <div className={"logo-item"}>
                <YOUTUBE className="youtube-logo"/>
            </div>
            <div className={"logo-item"}>
                <GOOGLE className="google-logo"/>
            </div>
            <div className={"logo-item"}>
                <MARRIOTT className="marriott-logo"/>
            </div>
            <div className={"logo-item"}>
                <ADIDAS className="adidas-logo"/>
            </div>
            <div className={"logo-item"}>
                <OC className="oc-logo"/>
            </div>
            <div className={"logo-item"}>
                <ME_TOO className="me-too-logo"/>
            </div>
            <div className={"logo-item"}>
                <AARP className="aarp-logo"/>
            </div>
            <div className={"logo-item"}>
                <SHARE_OUR_STRENGTH className="share-our-strength-logo"/>
            </div>
            <div className={"logo-item"}>
                <WRI className="wri-logo"/>
            </div>
        </div>
    </div>
  );
};

export default OurClientsPane;
