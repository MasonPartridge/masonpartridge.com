import React from "react";

/**
 * Title component
 * @param {object} props - prefix, title
 * @returns {JSX.Element}
 */
export default function Title(props) {
    const {prefix, title} = props;
  return (
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold w-full">
      {prefix}
      <b className="text-4xl md:text-5xl lg:text-6xl">{title}</b>
    </h1>
  );
}
