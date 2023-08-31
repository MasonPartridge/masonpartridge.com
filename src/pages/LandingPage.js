import React from "react";
import MeImage from "@picture/Me.png";

export default function LandingPage() {
  return (
    <div className="bg-black flex flex-col items-center w-[100%] h-[100%] font-tech">
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
      <div className="flex h-[15vh] text-white"></div>
    </div>
  );
}
