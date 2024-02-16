// import React from "react";
import foodImage from "../../logo/food.svg";
import CommunityImg from "../../logo/community.svg";
import MiceImg from "../../logo/mice.svg";
import PanelImg from "../../logo/panel.svg";
import HandsonImg from "../../logo/handson.svg";
import TshirtImg from "../../logo/tshirt.svg";
import AccessImage from "../../logo/access.svg";
// import gradient from "../assets/images/gradient.svg";

const Allaccess = () => {
  return (
    <section className="pl-1 pr-40 mr-30 pt-5">
      <div className="pass text flex items-center font-bold text-lg pl-0">
        <img className="mr-5 h-6 " src={AccessImage} alt="img" />
        Early Bird Pass
        {/*All Access pass*/}
      </div>

      <div className="gridpass grid grid-cols-2 gap-x-8 gap-y-1 pl-10 py-5 text-left justify-start ">
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={foodImage} alt="img" />
          Food and Beverages
        </div>
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={TshirtImg} alt="img" />
          Swags and Goodies
        </div>
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={MiceImg} alt="img" />
          Keynote Sessions
        </div>
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={PanelImg} alt="img" />
          Panel Discussions
        </div>
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={HandsonImg} alt="img" />
          Hands-on Sessions
        </div>
        <div className="icon-text flex items-center">
          <img className="mr-2 h-6" src={CommunityImg} alt="img" />
          Community Lounge Activities
        </div>
      </div>

    </section>
  );
};

export default Allaccess;
