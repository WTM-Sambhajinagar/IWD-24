// import React from "react";
import RegisterImg from "../../logo/register button.svg";
import Allaccess from "./Allaccesspass";
import pricingMonument from "../../logo/pricing.svg";

const Pricing = () => {
  const containerStyle = {
    borderRight: "2px solid #25e1b0", // Only right border
    paddingLeft: "0px",
    overflow: "hidden",
  };
  const containerStyle2 = {
    borderTopColor: "border-blue-500", // Tailwind color class for #4588ea
    borderBottomColor: "border-green-500", // Tailwind color class for #15b096
    borderRightColor: "border-red-500", // Tailwind color class for #50d0fd
    borderLeftColor: "border-yellow-500", // Tailwind color class for #25e1b0
    borderStyle: "solid",
    borderWidth: "2px",
    paddingLeft: "30px",
    overflow: "hidden",
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const textStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Open Sans, sans-serif",
  };

  const textLgStyle = {
    fontWeight: "700",
    fontSize: "60px",
    fontFamily: "Open Sans, sans-serif",
    paddingBottom: "0px",
  };

  const img1Style = {
    width: "150px",
    height: "50px",
  };

  return (
    <div
      className="flex mt-0 h-62 border-2 border-solid border-blue-500 rounded-lg overflow-hidden mr-30 "
      style={containerStyle2}
    >
      {/* All Access Pass Section */}
      <section
        className="mt-100 h-auto0 overflow-hidden mr-30 pl-3 pr-3"
        style={containerStyle}
      >
        <Allaccess />

        <div
          className="relative"
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <img
            src={pricingMonument}
            alt="bottom-right"
            className="h-16 w-25" // Adjust the size as needed
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container2 text-center pr-20 pl-20">
        <div className="row " style={colStyle}>
          <div className="col text" style={textStyle}>
            Pass Name
          </div>
          <div className="col text-lg" style={textLgStyle}>
            250 /-
          </div>
          <div className="col">
            <a href="https://konfhub.com/iwd24smbj" target="blank">
              <img
                className="img1"
                src={RegisterImg}
                alt="img"
                style={img1Style}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
