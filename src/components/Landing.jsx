import bgmb from "../assets/images/bg-mb.svg";
import bgdesktop from "../assets/images/bg-d.svg";
import logo from "../assets/images/logo.svg";
import dlogo from "../assets/images/logo-d.svg";
import wbutton from "../assets/images/certificate.svg";
import x from "../assets/images/x.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";
import calendarIcon from "../assets/images/uiw_date.svg";

const Landing = () => {
  const initialButtonWidth = window.innerWidth > 767 ? 150 : 120;

  return (
    <section className="relative min-h-screen bg-cover w-full">
      <img
        src={bgmb}
        className="absolute top-0 left-0 w-full h-full object-cover -z-2 lg:hidden"
      />

      <img
        src={bgdesktop}
        className="hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:object-cover lg:-z-2"
        alt="Background Image"
      />

      <div className="flex justify-between p-5 lg:p-10">
        <a
          href="https://www.instagram.com/wtm_sambhajinagar/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 lg:hidden"
        >
          <img src={logo} className="" />
        </a>
        <a
          href="https://www.instagram.com/wtm_sambhajinagar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block lg:z-10"
        >
          <img src={dlogo} className=" " width={230} />
        </a>
        <h2 className="z-10 text-white font-product font-medium lg:text-3xl">
          IWD'<span className="text-[#4FC3F7]">2024</span>
        </h2>
      </div>

      <div className="relative mt-20 lg:mt-20 flex flex-col items-center lg:items-start lg:ml-10">
        <h2 className="text-[#A4E3FF] font-product lg:text-3xl">
          Google&#39;s Women Techmakers
        </h2>
        <h1 className="text-white font-product text-3xl  mt-2 lg:hidden animate-pulse">
                  </h1>
        <h1 className="text-white text-center font-product text-3xl mt-1 lg:hidden animate-pulse">
          Open to all Tech & Startup Conference
        </h1>
        <h1 className="hidden lg:block lg:text-white lg:font-product lg:text-5xl lg:mt-5 animate-pulse">
          Biggest  Open to all Tech & Startup Conference
        </h1>
        {/* <p className="text-[#a7acad] mt-3 lg:text-xl md:text-xs">10th March 2024</p> */}
        <div className="flex items-center mt-3">
          <img
            src={calendarIcon}
            alt="Calendar Icon"
            className="w-6 h-6 mr-2"
          />
          <p className="text-[#a7acad] lg:text-xl md:text-xs">
            10th March 2024
          </p>
        </div>
        <a
          href="https://iwdcert.wtmsambhajinagar.co/"
          className="z-10 mt-8 lg:mt-20 lg:w-[13%]"
        >
          <img src={wbutton} width={initialButtonWidth} alt="Waitlist Button" />
        </a>

        {/* <div className=" mt-4 lg:hidden flex flex-row gap-2">
          <a
            href="https://chat.whatsapp.com/IoSWS99fdv4GeKIeJjoYzp"
            target="_blank" rel="noreferrer"
            className="text-white text-sm text-opacity-30 font-product"
          >
            #wtmsambhajinagar
          </a>
          <p className="text-white text-sm text-opacity-30 font-product">
            #iwd24
          </p>
          <p className="text-white text-sm text-opacity-30 font-product">
            #wtmiwd24
          </p>
        </div> */}
      </div>

      <div className="hidden lg:relative lg:z-10 lg:flex lg:flex-col lg:ml-10 lg:mt-20">
        <div className="flex flex-row gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl text-opacity-30 font-product"
          >
            #wtmsambhajinagar
          </a>
          <p className="text-white text-xl text-opacity-30 font-product">
            #iwd24
          </p>
          <p className="text-white text-xl text-opacity-30 font-product">
            #wtmiwd24
          </p>
        </div>
        <div className="flex flex-row gap-5 mt-10">
          <a
            href="https://twitter.com/wtmnagpur?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={x} className="" />
          </a>
          <a
            href="https://www.instagram.com/wtm_sambhajinagar/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={insta} className="" />
          </a>
          <a
            href="https://www.linkedin.com/company/women-techmakers-auranagabd/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {" "}
            <img src={linkedin} className="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
