import React from "react";
export default function NavigationBar() {
  return (
    <div
      className="text-white z-50 fixed bg-background px-4 border-b-2 p-4
       border-b-secondary w-[100%] flex justify-center text-lg"
    >
      <div className="max-w-screen-xl w-full justify-between flex gap-4 ">
        <a className="hover:font-bold text-xl" href="#home">
          MASONPARTRIDGE.COM
        </a>
        <div className="flex gap-4">
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
      </div>
    </div>
  );
}
