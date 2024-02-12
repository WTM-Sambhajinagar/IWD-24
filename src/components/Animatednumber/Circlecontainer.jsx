// import React from "react";
import PropTypes from "prop-types";
import AnimatedNumber from "./AnimatedNumber";

const MultiColorCircle = ({ text, showPlusSign }) => {
  const endValue = parseInt(text, 10);

  // Inline styles
  const circleContainerStyle = {
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: "0 auto",
  };

  const circleTextStyle = {
    background: "rgba(0, 0, 0, 0)",
    padding: "0",
    borderRadius: "5px",
    textAlign: "center",
    color: "white",
    position: "relative",
    zIndex: "1",
    fontSize: "35px",
    fontWeight: "600",
    marginBottom: "0",
    fontFamily: "Open Sans, sans-serif",
  };

  const circleBorderStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    borderRadius: "50%",
    border: "11px solid transparent",
    borderTopColor: "#50d0fd",
    borderBottomColor: "#26987a",
    borderRightColor: "#6fe8d3",
    borderLeftColor: "#4588ea",
    transform: "rotate(45deg)",
  };

  return (
    <div className="circle-container" style={circleContainerStyle}>
      <div className="circle-border" style={circleBorderStyle}></div>
      <p className="circle-text" style={circleTextStyle}>
        {showPlusSign ? (
          <AnimatedNumber endValue={endValue} duration={2000} />
        ) : (
          endValue
        )}
        {showPlusSign && <span style={{ marginLeft: "5px" }}>+</span>}
      </p>
    </div>
  );
};

MultiColorCircle.propTypes = {
  text: PropTypes.string.isRequired,
  showPlusSign: PropTypes.bool.isRequired,
};

export default MultiColorCircle;