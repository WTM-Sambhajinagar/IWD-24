import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/b1.jpg";
import image2 from "../../assets/images/b2.png";
// import image3 from "../../assets/images/image5resize.jpg";
import "./Carousel.css"; // Import your custom CSS for styling

function Carousel() {
  const images = [image2, image2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 1000); // Auto-advance every 3000ms (3 seconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={prevImage} className="carousel-button left">
          &lt;
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}

          className="carousel-image"
        />
        <button onClick={nextImage} className="carousel-button right">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
