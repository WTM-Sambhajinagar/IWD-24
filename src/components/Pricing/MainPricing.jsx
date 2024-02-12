import "../Pricing/Pricing.css";
import Pricing from "./Pricing";
// import Allaccess from "./Allaccesspass";
import OnScrollPricing from "./OnScrollPricing";
import { useState, useEffect } from "react";

const MainPricing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      {isMobile && ( // Render OnScroll only on mobile view
        <section className="relative">
           <OnScrollPricing /> 
        </section>
      )}
      {!isMobile && ( // Render content only on desktop view
        <>
          <div className="Passeslive text-center">
            <p className="text-white font-product text-2xl" style={{ fontSize: '48px', marginBottom: '2rem', fontFamily: '"Open Sans", sans-serif' }}>Passes are live !!</p>
          </div>
          <div className=" text-center" style={{ height: "70vh" }}>
            <div className="row">
              {/* <div className="col-8 mt-0">
                <Allaccess /> 
              </div> */}
              <div className="col-4">
                <Pricing />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MainPricing;