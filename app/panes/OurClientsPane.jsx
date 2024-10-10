import Image from "next/image";

{
  /* <ul class="no-list client-list">
  <li><span>AARP</span></li>
  <li><span>Adidas/Ivy Park</span></li>
  <li><span>Appian</span></li>
  <li><span>Capital One</span></li>
  <li><span>The Commonwealth Fund</span></li>
  <li><span>Environmental Defense Fund</span></li>
  <li><span>Experience Fayetteville</span></li>
  <li><span>Google/YouTube</span></li>
  <li><span>KABOOM!</span></li>
  <li><span>Marriott International</span></li>
  <li><span>McCormick & Company</span></li>
  <li><span>me too. Movement</span></li>
  <li><span>Ocean Conservancy</span></li>
  <li><span>Rails to Trails Conservancy</span></li>
  <li><span>Share Our Strength</span></li>
  <li><span>The Opportunity Agenda</span></li>
  <li><span>World Resources Institute</span></li>
</ul> */
}

const OurClientsPane = () => {
  return (
    <div class="no-list client-list">
      <Image src="../media/client-logos/youtube.svg" />
      <Image src="../media/client-logos/marriott.svg" />
      <Image src="../media/client-logos/adidas.svg" />
      <Image src="../media/client-logos/oc.svg" />
      <Image src="../media/client-logos/me-too.svg" />
      <Image src="../media/client-logos/aarp.svg" />
      <Image src="../media/client-logos/share-our-strength.svg" />
      <Image src="../media/client-logos/wri.svg" />
    </div>
  );
};

export default OurClientsPane;
