import React from "react";
import { useEffect, useState } from "react";
import MultiColorCircle from "./Circlecontainer";

function Grid() {
  const [containerHeight, setContainerHeight] = useState("500px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerHeight("500px"); // Adjust the height value for mobile
      } else {
        setContainerHeight(""); // Default height for larger screens
      }
    };

    // Add event listener to update containerHeight on window resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    marginTop: "10px",
    marginBottom: "10px", // Corrected typo
    color: "white",
    width: "100%",
    fontFamily: "Open Sans, sans-serif",
    display: "flex",
    height: containerHeight, // Dynamic height
    alignItems: "center",
    justifyContent: "center",
  };

  const MCnStyle = {
    textAlign: "center",
    color: "white",
    marginTop: "10px",
  };

  const rowStyle = {
    width: "100%",
    justifyContent: "center",
    padding: "20px",
  };

  const colStyle = {
    padding: "20px",
    flexDirection: "column",
  };

  return (
    <>
      <div className=" text-center" style={containerStyle}>
        <div className="row mt-2" style={rowStyle}>
          <div className="col col-sm" style={colStyle}>
            <MultiColorCircle text="1" showPlusSign={false} />
            <p className="md:text-xl lg:text-2xl" style={MCnStyle}>
              Day
            </p>
          </div>
          <div className="col mt-6" style={colStyle}>
            <MultiColorCircle text="350+" showPlusSign={true} />
            <p className="md:text-xl lg:text-2xl" style={MCnStyle}>
              Estimated
              <br />
              Attendance
            </p>
          </div>
          <div className="col" style={colStyle}>
            <MultiColorCircle text="10+" showPlusSign={true} />
            <p className="md:text-xl lg:text-2xl" style={MCnStyle}>
              Speakers
            </p>
          </div>
          <div className="col" style={colStyle}>
            <MultiColorCircle text="10+" showPlusSign={true} />
            <p className="md:text-xl lg:text-2xl" style={MCnStyle}>
              Sessions
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .row {
              align-items: center;
              flex-direction: row; 
              margin-top: -290px; // Adjust margin as needed
            }
            .container {
              justify-content: center;
              align-items: center;
              height: auto; 
              margin-top: 0px;
              margin-bottom: 160px;
            }
            .col {
              padding: 20px;
              margin-bottom: 0; 
            }

            .MCn {
              font-size: 20px; // Adjust font size as needed
            }

             
          }
        `}
      </style>
    </>
  );
}

export default Grid;
