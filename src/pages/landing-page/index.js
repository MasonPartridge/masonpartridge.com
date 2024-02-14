import React, { useState, useEffect } from "react";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Header from "./Header";
import Expertise from "./Expertise";
import NavigationBar from "@components/NavigationBar";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    function handleScreenChange() {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
  }, []);

  return (
    <div className="font-tech overflow-hidden bg-background flex flex-col items-center">
      <NavigationBar />
      <div className="max-w-screen-xl flex flex-col items-start w-[100%] px-16 h-[100%]">
        <Header isMobile={isMobile} />
        {isMobile && <hr className="w-[90%] border-4 border-secondary" />}
        <Expertise />
        <Technologies />
        <Experience isMobile={isMobile} />
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-center bg-secondary w-full">
      <div
        id="contact-me"
        className="text-white flex flex-col gap-2 p-32 py-32"
      >
        <h1 className="text-[300%]">Contact Me:</h1>
        <p className="text-[150%]">
          If you need a website made quickly and for cheap I can assist! I
          am only an email away:{" "}
          <a
            className="text-highlight"
            href="mailto: masonepartridge@gmail.com"
          >
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
  )
}


