import React from "react";

export default function Project() {

    return (
        <div
          className="flex lx:flex-row flex-col lx:items-start items-center 
          lx:gap-16 gap-8 py-6"
        >
          <img
            className="lx:w-[600px] w-[100%] lx:max-h-[314px] shadow-2xl shadow-black"
            src={props.image}
            alt=""
          />
          <div className="h-[314px] flex flex-col">
            <div className="relative flex-grow item">
              <a
                href={props.link}
                target="_blank"
                className="text-[200%] text-highlight"
              >
                {props.title}
              </a>
              <p>{props.body}</p>
              {/* <div className="bg-gradient-to-t from-gray-900 absolute bottom-0 w-[100%] h-[30%]"></div> */}
            </div>
            {props.isMobile && (
              <button className="font-bold text-highlight pt-2 text-left">
                Learn More
              </button>
            )}
          </div>
        </div>
      );
}