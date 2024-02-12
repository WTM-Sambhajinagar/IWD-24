// AnimatedNumber.js
import { useEffect, useState,useRef } from "react";
import PropTypes from "prop-types";



const AnimatedNumber = ({ endValue, duration }) => {
  const [number, setNumber] = useState(0);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    const startTime = Date.now();

    const animateNumber = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const animatedValue = Math.min(
          Math.floor(progress * endValue),
          endValue
        );
        setNumber(animatedValue);

        requestAnimationFrame(animateNumber);
      } else {
        setNumber(endValue);
      }
    };

    animateNumber();
  };

  return <span ref={animatedRef}>{number}</span>;
};

AnimatedNumber.propTypes = {
  endValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default AnimatedNumber;