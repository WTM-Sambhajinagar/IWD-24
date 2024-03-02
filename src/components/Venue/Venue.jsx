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
                Venue: MGM University, Chh.Sambhajinagar (Aurangabad)
            </span>
          </h2>

          <iframe
            className="venue-img-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.9771044554705!2d75.35500902934571!3d19.883188668148122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3a0ab7088b7%3A0xb5af50109d8a8cce!2sMGM%20University%20Aurangabad!5e0!3m2!1sen!2sin!4v1709382874140!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="venue-five">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Venue;
