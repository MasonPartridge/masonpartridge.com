import React from "react";

export default function Title(prefix, title) {
  return (
    <h1 className="text-4xl lg:text-5xl font-bold w-full">
      {prefix}
      <b className="text-5xl lg:text-6xl">({title})</b>
    </h1>
  );
}