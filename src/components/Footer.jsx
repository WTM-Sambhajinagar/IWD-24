// import React from 'react'
import gradient from "../assets/images/gradient.svg";
import x from "../assets/images/x.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";

function Footer() {
  return (
    <footer
      className="h-40 bg-black bg-opacity-30 flex justify-center items-center mb-10 w-full "
      style={{ display: "flex" }}
    >
      <img src={gradient} width={200} className="absolute bottom-0" />
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <p className="mt-1  flex items-center text-white font-product text-xl pr-3">
            Reach out to us at{" "}
          </p>
          <a href="mailto:womentechmakersnagpur@gmail.com" className="">
            <p className="text-[#4FC3F7]">womentechmakersnagpur@gmail.com</p>
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="ml-10">
            {" "}
            {/* Add margin-right */}
            <h2 className="text-white font-product text-xl pr-3">
              Follow us on
            </h2>
          </li>
          <li className="ml-4">
            {" "}
            {/* Add margin-right */}
            <a
              href="https://twitter.com/wtmnagpur?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              <img src={x} />
            </a>
          </li>
          <li className="ml-4">
            {" "}
            {/* Add margin-right */}
            <a
              href="https://www.instagram.com/wtmnagpur/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              <img src={insta} />
            </a>
          </li>
          <li className="ml-4">
            {" "}
            {/* No margin-right for the last item */}
            <a
              href="https://www.linkedin.com/company/wtmnagpur/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              <img src={linkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
