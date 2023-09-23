import React, {useState, useEffect} from "react";
import MeImage from "@picture/Me.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div>
      <div className="bg-gray-950 flex flex-col items-center w-[100%] h-[100%] font-tech overflow-hidden">
        <div className="text-white z-50 fixed bg-primary px-4 w-[100%] justify-center flex gap-4 text-lg">
          <a className="hover:font-bold" href="#home">
            Home
          </a>
          <a className="hover:font-bold" href="#skills">
            Skills
          </a>
          <a className="hover:font-bold" href="#professional-experience">
            Professional Experience
          </a>
          <a className="hover:font-bold" href="#personal-experience">
            Personal Experience
          </a>
          <a className="hover:font-bold" href="#contact-me">
            Contact Me
          </a>
        </div>
        <div
          id="home"
          className="w-[100%] h-[100vh] flex xl:flex-row flex-col justify-center xl:gap-16 gap-4 items-center"
        >
          <img
            className={`${isMobile ? 'absolute top-[25%]' : 'relative'} h-64 w-64`}
            src={MeImage}
            alt="logo"
          />
          <div className="text-white mt-32">
            <h1 className="xl:text-[6vw] text-[5vw]">Mason Edward Partridge </h1>
            <h1>
              Occupation: <b className="text-lg">Web Developer</b>
            </h1>
            <h1>Identification: MASON EDWARD PARTRIDGE</h1>
            <h2>Nickname: SudoNoun</h2>
          </div>
        </div>
        <Skills />
        <Experience isMobile={isMobile}/>
        <div
          id="contact-me"
          className="text-white flex flex-col gap-2 p-32 py-32"
        >
          <h1 className="text-[300%]">Contact Me:</h1>
          <p className="text-[150%]">
            If you need a website made quickly and for cheap I can assist! I am
            only an email away:{" "}
            <a className="text-blue-400" href="mailto: masonepartridge@gmail.com">
              masonepartridge@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-4 text-lg">
            <a href="https://www.linkedin.com/in/mason-partridge-a828a1246/">
              <i className="fa-brands fa-linkedin text-white"></i>
            </a>
            <a href="https://github.com/MasonPartridge">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto: masonepartridge@gmail.com">
              <i className="fa-solid fa-envelope text-white"></i>
            </a>
            <p>Phone: +1 (209) 535-7036</p>
          </div>
        </div>
      </div>
    </div>
  );
}
