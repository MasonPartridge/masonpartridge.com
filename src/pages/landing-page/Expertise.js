import React from "react";

export default function Expertise() {
  return (
    <div
      id="expertise"
      className="lg:h-screen flex gap-32 flex-col justify-center items-center w-full mx-32 text-text max-w-screen-xl"
    >
      <h1 className="text-4xl lg:text-5xl font-bold w-full">
        01.<b className="text-5xl lg:text-6xl">Expertise</b>
      </h1>
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="bg-primary p-6 flex flex-col gap-8 lg:max-w-[40%]">
          <h1 className="text-[300%]">Frontend Dev</h1>
          <p>
            I craft dynamic and user-friendly web interfaces using the React.js, Webpack, Tailwind,
            and am comfortable in frameworks such as Next.js. Designing and building interactive components, managing
            data flow, and ensuring a smooth and engaging user experience is my
            passion!
          </p>
        </div>
        <div className="bg-secondary p-6 flex flex-col gap-8 lg:max-w-[35%]">
          <h1 className="text-[250%]">Backend Dev</h1>
          <p>
            I build and maintain backend services using Node.js, Express.js, and Amazon Web Services.
            I am proficient in RESTful API design and implementation and
            familiar with SQL and NoSQL databases, with hands on experience with 
            MongoDB and Vercel Postgres.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-secondary p-8 flex flex-col gap-8 flex-1 min-h-44 text-sm">
            <h1 className="text-[150%]">UI/UX Design</h1>
            <p>
            I have experience creating clean, modern, and user-friendly UIs using Figma, 
            placing a high amounut of effort to ensure that my designs are feasible and can be implemented effectively by developers." 
            </p>
          </div>
          <div className="border-l-[10px] border-primary p-4 flex-col flex justify-between flex-1 h-44">
            <p className="text-sm">
              Play doesn’t just help us to explore what is essential. It is
              essential in and of itself.
            </p>{" "}
            <p className="text-base">GREG MCKEOWN: ESSENTIALISM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
