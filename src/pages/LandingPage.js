import React from "react";
import MeImage from "@picture/Me.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function LandingPage() {
  return (
    <div className="bg-gray-950 flex flex-col items-center w-[100%] h-[100%] font-tech">
      <div className="w-[100%] h-[100vh] flex justify-center gap-8 items-center">
        <img className="rounded-full h-64 w-64" src={MeImage} alt="logo" />
        <div className="text-white mt-32">
          <h1 className="text-[6vw]">Mason Edward Partridge </h1>
          <h1>Identification: MASON EDWARD PARTRIDGE</h1>
          <h2>Nickname: SudoNoun</h2>
          <h2>Age: 21</h2>
          <h2>Height: 5' 9"</h2>
          <h2>Weight: 130 lbs</h2>
          <h2>Eye Color: Blue</h2>
        </div>
      </div>
      <Skills />
      <Experience />
      <div className="text-white py-32">
        <h1 className="text-[300%]">Contact Me</h1>
        <p className="text-[150%]">
          If you need a website made quickly and for cheap I can assist! Just an
          email away:{" "}
          <a className="text-blue-400" href="mailto: masonepartridge@gmail.com">
            masonepartridge@gmail.com
          </a>
        </p>
        <a href=""></a>
      </div>
    </div>
  );
}
