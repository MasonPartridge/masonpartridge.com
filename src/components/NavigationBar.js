import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationBar(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <MobileNavigationBar />;
  }

  return (
    <div
      className="text-white z-50 fixed bg-background px-4 border-b-2 p-4
       border-b-secondary w-[100%] flex justify-center text-lg"
    >
      <div className="max-w-screen-xl w-full justify-between flex gap-4 font-tech">
        <a className="hover:font-bold text-xl" href="/">
          MASONPARTRIDGE.COM
        </a>
        <div className="flex gap-4">
          <Link className="hover:font-bold text-xl" to={"/"}>
            HOME
          </Link>
          <Link className="hover:font-bold text-xl" to={"/portfolio"}>
            PORTFOLIO
          </Link>
          <Link className="hover:font-bold text-xl" to={"/resume"}>
            RESUME
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileNavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        `${open ? "bg-background " : ""}` +
        "fixed top-0 left-0 w-screen h-screen z-50 flex flex-col py-10 text-text font-tech"
      }
    >
      <div className="flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="flex relative flex-col w-12 h-10 gap-4 mx-10"
        >
          <div
            className={"bg-text w-12 h-3 absolute transition-all duration-500 -translate-x-1/2 -translate-y-1/2 top-0" + `${open ? " rotate-45 top-1/2" : ""}`}
          ></div>
          <div
            className={"bg-text w-12 h-3 absolute transition-all duration-500 -translate-x-1/2 -translate-y-1/2 bottom-0" + `${open ? " -rotate-45 top-1/2" : ""}`}
          ></div>
        </button>
      </div>
      {open && (
        <div className="py-16 w-full h-full bg-background z-40 text-4xl">
          <div className="flex flex-col gap-4 items-center h-full">
            <Link className="hover:font-bold text-xl" to={"/"}>
              HOME
            </Link>
            <Link className="hover:font-bold text-xl" to={"/portfolio"}>
              PORTFOLIO
            </Link>
            <Link className="hover:font-bold text-xl" to={"/resume"}>
              RESUME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
