import React, { useState, useEffect } from "react";
import Technologies from "./Technologies";
import Header from "./Header";
import Expertise from "./Expertise";
import PortfolioGallery from "@components/PortfolioGallery";
import WorkHistory from "./WorkHistory";

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
      <div className="max-w-screen-xl flex flex-col gap-32 my-32 items-start w-[100%] px-8 lg:px-16 h-[100%]">
        <Header isMobile={isMobile} />
        {isMobile && <hr className="w-[90%] border-4 border-secondary" />}
        <Expertise />
        <Technologies />
        <PortfolioGallery titlePrefix="03." />
        <WorkHistory/>
      </div>
    </div>
  );
}

