import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const StyledText = ({ paragraphText }) => {
  const [marginTop, setMarginTop] = useState("100px");
  const [fontSize, setFontSize] = useState("46px"); // Default font size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMarginTop("4px");
        setFontSize("36px"); // Change font size for mobile view
      } else {
        setMarginTop("100px");
        setFontSize("46px"); // Revert font size for larger screens
      }
    };

    // Add event listener to update marginTop and fontSize on window resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textStyle = {
    fontSize: fontSize, // Use dynamic font size
    color: "white",
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif",
    marginTop: marginTop,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div id="para">
        <p style={textStyle}>{paragraphText}</p>
      </div>
    </>
  );
};

StyledText.propTypes = {
  paragraphText: PropTypes.string.isRequired,
};

export default StyledText;
