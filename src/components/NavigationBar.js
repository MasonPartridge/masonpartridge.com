import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
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
          <Link className="hover:font-bold text-xl" to={'/'}>
            HOME
          </Link>
          <Link className="hover:font-bold text-xl" to={'/portfolio'}>
            PORTFOLIO
          </Link>
          <Link className="hover:font-bold text-xl" to={'/resume'}>
            RESUME
          </Link>
        </div>
      </div>
    </div>
  );
}
