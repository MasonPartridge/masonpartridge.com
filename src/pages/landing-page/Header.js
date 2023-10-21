import React from "react";

export default function Header(props) {
  const { isMobile } = props;
  if (isMobile) {
    return (
      <div
        id="home"
        className="w-[90%] text-white flex flex-col gap-4 tracking-[-0.16em] py-40"
      >
        <h1 className="text-6xl">Mason</h1>
        <h1 className="text-center text-6xl">Partridge</h1>
        <div className="flex justify-end">
          {" "}
          <span className="text-right text-4xl bg-primary">Web Developer</span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="home"
      className="w-[100%] h-[100vh] flex xl:flex-row flex-col justify-center xl:gap-16 gap-4 items-center"
    >
      <div className="text-white mt-32">
        <h1 className="xl:text-[6vw] text-[5vw]">Mason Edward Partridge </h1>
        <h1 className="text-2xl">
          Occupation:{" "}
          <b className="relative bg-primary text-4xl text-highlight z-20">
            Full Stack Web Developer
          </b>
        </h1>
      </div>
    </div>
  );
}
