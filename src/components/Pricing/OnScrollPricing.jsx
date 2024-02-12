import foodImage from "../../logo/food.svg";
import CommunityImg from "../../logo/community.svg";
import MiceImg from "../../logo/mice.svg";
import PanelImg from "../../logo/panel.svg";
import HandsonImg from "../../logo/handson.svg";
import TshirtImg from "../../logo/tshirt.svg";
import AccessImage from "../../logo/access.svg";
import RegisterImg from "../../logo/register button.svg";
import "./Pricing.css";

const OnScrollPricing = () => {
  const isMobile = window.innerWidth < 992; // Define mobile breakpoint here
  const isMobile1 = window.innerWidth <= 768;
  if (!isMobile) return null; // Hide the component on desktop view
  const containerOsSmStyle = {
  
    height: '153px',
    width: '286px',
    padding: '20px',
    margin: '-22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px',
    overflow:'hiddend'
  };

  return (
    <>
      <span className="Passeslive-os text-center os justify-center mt-3">
  <p className="text-4xl font-sans " style={{ fontSize: isMobile1 ? '36px' : '48px',fontFamily: '"Open Sans", sans-serif'}}>Passes Are live!</p>
</span>
<div className="flex flex-col container-os bg-black text-white mb-10 mt-20 mx-auto rounded-xl overflow-hidden justify-center border-t-2 border-b-2 border-r-2 border-l-2 border-t-red border-b-blue border-r-green border-l-yellow " style={{ width: '284px' }}>
  <div className="pass text flex items-center font-bold text-lg pl-0 pb-8">
    <img
      className="mr-5 h-6 "
      src={AccessImage}
      alt="img"
    />
    All Access pass
  </div>
  <div className="icon-text flex items-center  ">
    <img
      className="mr-2 h-6"
      src={foodImage}
      alt="img"
    />
    Food and Beverages
  </div>
  <div className="icon-text flex items-center">
    <img
      className="mr-2 h-6"
      src={TshirtImg}
      alt="img"
    />
    Swags and Goodies
  </div>
  <div className="icon-text flex items-center">
    <img
      className="mr-2 h-6"
      src={MiceImg}
      alt="img"
    />
    Keynote Sessions
  </div>
  <div className="icon-text flex items-center">
    <img
      className="mr-2 h-6"
      src={PanelImg}
      alt="img"
    />
    Panel Discussions
  </div>
  <div className="icon-text flex items-center">
    <img
      className="mr-2 h-6"
      src={HandsonImg}
      alt="img"
    />
    Hands-on Sessions
  </div>
  <div className="icon-text flex items-center">
    <img
      className="mr-2 h-6"
      src={CommunityImg}
      alt="img"
    />
    Community Lounge Activities
  </div>
  <div className=" container-os container-os-sm border-t-2 border-b-2 border-r-2 border-l-2 border-t-red border-b-blue border-r-green border-l-yellow rounded-mg" style={containerOsSmStyle}>
    <a href="https://konfhub.com/iwdn2024" target="blank">
      <img className="img1" src={RegisterImg} alt="img" />
    </a>
  </div>
</div>

    </>
  );
};

export default OnScrollPricing;