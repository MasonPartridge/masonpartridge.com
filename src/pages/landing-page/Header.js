import React from "react";

export default function Header(props) {
  const { isMobile } = props;
  if (isMobile) {
    return (
      <div
        id="home"
        className="text-white flex flex-col gap-4"
      >
        <h1 className="text-[400%]">Mason</h1>
        <h1 className="text-center text-[400%]">Partridge</h1>
        <div className="flex justify-end">
          {" "}
          <span className="text-right text-[250%] bg-primary">
            Web Developer
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="home"
      className="h-[50vh] flex flex-col justify-center gap-16 items-start leading-none"
    >
      <div className="text-white w-full gap-4 2xl:gap-8 flex flex-col">
        <h1 className="lg:text-[6vw] text-[5vw] 2xl:text-8xl">Mason Edward Partridge</h1>
        <h1 className="text-2xl">
          Occupation:{" "}
          <b className="relative bg-primary text-[3vw] 2xl:text-3xl text-highlight z-20">
            Full Stack Web Developer
          </b>
        </h1>
      </div>
    </div>
  );
}
