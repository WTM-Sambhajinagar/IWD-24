import "./cards.css";
import frame1 from "./1.png";
import frame2 from "./2.png";
import frame3 from "./3.png";
// import frame1 from "../"

const Card = () => {
  return (
    <div className="header">
      <div className="heading">
        <h2>Community Insights</h2>
      </div>
      <div className="comm">
        <div className="frame">
          <div className="main-text">
            <div className="card-image">
              <img src={frame1} />
            </div>
            <div className="name-designation">
              <h2>Madona S. Wambua</h2>
              <p>
                {" "}
                IWD is a moment of joy, unity, & enlightenment. It is a chance
                for us to highlight achievements in business and empower women
                globally to step forward and create an impact.{" "}
              </p>
            </div>
          </div>
          {/* <div className="lines">
            <p>&quot; IWD is a moment of joy, unity, and enlightenment &quot;</p>
        </div> */}
        </div>
        <div className="frame">
          <div className="main-text">
            <div className="card-image">
              <img src={frame2} />
            </div>
            <div className="name-designation">
              <h2>Rachel Connor</h2>
              <p>
                Celebrating IWD is a wonderful opportunity to come together,
                share our stories, and encourage women to pursue leadership
                roles in finance and economics.
              </p>
            </div>
          </div>
          {/* <div className="lines">
            <p>&quot; IWD is a time to reflect on our achievements &quot;</p>
        </div> */}
        </div>

        <div className="frame">
          <div className="main-text">
            <div className="card-image">
              <img src={frame3} />
            </div>
            <div className="name-designation">
              <h2>Durdona Bukhronova</h2>
              <p>
                IWD is a time to reflect on our achievements in the arts and
                inspire women everywhere to express themselves creatively,
                breaking barriers and leaving a lasting impact.
              </p>
            </div>
          </div>
          {/* <div className="lines">
            <p>&quot; IWD is a wonderful opportunity to come together &quot;</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
