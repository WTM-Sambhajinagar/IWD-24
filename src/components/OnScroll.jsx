import gradient from "../assets/images/gradient.svg";
import x from "../assets/images/x.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";

const OnScroll = () => {
  return (
    <section className="relative min-h-60">
      <img src={gradient} width={200} className="absolute bottom-0" />
      <div className="flex flex-col items-center">
       
        <p className="text-white mt-5 font-product flex items-center">Reach out to us at </p>
        <a href="mailto:iwd@wtmsambhajinagar.co" className="">
          <p className="text-[#4FC3F7]">iwd@wtmsambhajinagar.co</p>
        </a>


        <h2 className="text-white text-opacity-80 font-product mt-4">Follow us on</h2>
        <div className="flex flex-row gap-2 mt-3">
          <a
            href="https://twitter.com/wtmnagpur?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={x} />
          </a>
          <a
            href="https://www.instagram.com/wtm_sambhajinagar/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={insta} />
          </a>
          <a
            href="https://www.linkedin.com/company/women-techmakers-auranagabd/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OnScroll;