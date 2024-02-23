import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center bg-secondary w-full font-tech">
      <div
        id="contact-me"
        className="text-white flex flex-col gap-2 p-32 py-32"
      >
        <h1 className="text-[300%]">Contact Me:</h1>
        <p className="text-[150%]">
          If you need a website made quickly and for cheap I can assist! I am
          only an email away:{" "}
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
  );
}
