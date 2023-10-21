import React from "react";

export default function Header(props) {
  const { isMobile } = props;
  if (isMobile) {
    return (
      <div
        id="home"
        className="w-[90%] text-white flex flex-col gap-4 tracking-[-0.16em] py-64 max-w-md leading-none"
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
      className="w-[100%] h-[100vh] flex xl:flex-row flex-col justify-center gap-16 items-center max-w-screen-2xl px-32 leading-none"
    >
      <div className="text-white mt-32 w-full gap-4 2xl:gap-8 flex flex-col">
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
