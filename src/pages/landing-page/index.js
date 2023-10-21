import React, {useState, useEffect} from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Header from "./Header";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div>
      <div className="bg-background flex flex-col items-center w-[100%] h-[100%] font-tech overflow-hidden">
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
        <Header isMobile={isMobile}/>
        <Skills />
        <Experience isMobile={isMobile}/>
        <div className="flex justify-center bg-secondary w-full">
          <div
            id="contact-me"
            className="text-white flex flex-col gap-2 p-32 py-32"
          >
            <h1 className="text-[300%]">Contact Me:</h1>
            <p className="text-[150%]">
              If you need a website made quickly and for cheap I can assist! I am
              only an email away:{" "}
              <a className="text-highlight" href="mailto: masonepartridge@gmail.com">
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
    </div>
  );
}
