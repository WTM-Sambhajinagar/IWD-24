import "./Theme.css";

const Theme = () => {
  return (
    <section className="mt-20">
      <div className="text-class ">
          #Impact the future
        <div className="theme-wrapper">
          <div
            className="border-box-class"
            style={{
              border: "2px solid rgb(88, 192, 233)",
              borderRadius: "30px 120px 30px 30px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <p className="head-text">Tech</p>
            <p className="para-text">
              Shaping tomorrow, impacting today with a purpose
            </p>
          </div>

          <div
            className="border-box-class "
            style={{
              border: "2px solid rgb(88, 192, 233)",
              borderRadius: "30px 120px 30px 30px",
              overflow: "hidden",
                textAlign: "center",
            }}
          >
            <p className="head-text">Startups</p>
            <p className="para-text">
              Building Bridges, Breaking Barriers, inclusivity for a better
              tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
