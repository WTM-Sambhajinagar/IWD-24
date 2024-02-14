import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Venue.css";
import Carousel from "./carousel";

const Venue = () => {
  return (
    <div className="venue">
      Venue
      <div className="venue-wrapper-container">
        <div className="venue-three">
          <h2 className="venue-head">
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            <span className="venue-text">
              Will be released soon.....
            </span>
          </h2>

          {/*<iframe
            className="venue-img-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.659938617237!2d79.15659657503427!3d21.126119580547744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c731fab0e1d5%3A0x9c594338ee9836ca!2sSymbiosis%20University!5e0!3m2!1sen!2sin!4v1705334115882!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />*/}
        </div>
        {/*<div className="venue-five">
          <Carousel />
        </div>*/}
      </div>
    </div>
  );
};

export default Venue;
