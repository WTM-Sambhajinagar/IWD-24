import iwd from "../../assets/images/Frame 648.svg";
import location from "../../assets/images/location 1.svg";
import "./iwd.css";

const Newsection = () => {

  const isMobile = window.innerWidth <= 768;

  return (
    <section>
      <div className="iwd-section">
        <img src={iwd} className="" />
        <div className="iwd-section-1">
        <h2 className="text-white font-product text-2xl" style={{ fontSize: isMobile ? '30px' : '44px', marginBottom: '2rem', fontFamily: '"Open Sans", sans-serif' }}>What is IWD?</h2>
          <p className="text-white text-xl font-product">
            International Women's Day is Women Techmakers’ largest annual event
            campaign all around the world during the months of March and April
            in celebration of this moment.
          </p>
          <p className="text-white text-xl font-product">
            IWD Chh.Sambhajinagar event is a fusion of innovation, inspiration, and
            diversity. This year, Women Techmakers is focused on elevating
            diverse voices with engaging skill-building sessions, inspiring
            stories, and impactful community initiatives. This celebration is
            more than just an event; it's a milestone in technological progress
            and community empowerment.
          </p>
        </div>
      </div>
      <a
        href="https://konfhub.com/iwd24smbj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={location} className="location-ngp" />
      </a>
    </section>
  );
};

export default Newsection;
