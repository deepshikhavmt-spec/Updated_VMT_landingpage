import "./TrustedBy.css";
import rupe from "../../assets/clients/rupe.png";
import Alizaidi from "../../assets/clients/Alizaidi.jpeg";
import winkies from "../../assets/clients/winkies.png";
import solitario from "../../assets/clients/solitario.svg";
import Vilogo from "../../assets/clients/Vilogo.svg";
import vritus from "../../assets/clients/vritus-logo.jpg";
import Aurum from "../../assets/clients/Aurum.jpeg";
import HiA from "../../assets/clients/HiA.jpeg";
import RH from "../../assets/clients/RH.webp";
import RP from "../../assets/clients/RP.jpg";
import xinglin from "../../assets/clients/xinglin.jpeg";
import practe from "../../assets/clients/practe.png";
import mykveda from "../../assets/clients/mykveda.webp";


const logos = [
  rupe,
  winkies,
  solitario,
  Vilogo,
  vritus,
  practe,
  mykveda,
  Aurum,
  Alizaidi,
  HiA,
  RH,
  RP,
  xinglin,
];

export default function BrandLogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
