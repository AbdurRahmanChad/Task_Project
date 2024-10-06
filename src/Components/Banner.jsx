import React from "react";
import imge from "../assets/img5.png";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-14 px-5 bg-yellow-100">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className="text-5xl font-semibold leading-tight mt-16">
          i'M Abdur Rahman <br />
          <span className="text-yellow-500">Front-End </span>
          Developer
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          commodi ullam repellat, earum veniam at asperiores ipsa voluptas eum!
          Nemo aspernatur deserunt qui consequuntur neque nobis ipsum
          voluptatibus consequatur possimus!
        </p>
        <button className="py-2 px-6 bg-blue-400 text-white rounded-xl font-bold cursor-pointer hover:bg-slate-500 duration-200">
          Hire me
        </button>
      </div>
      <div className="mt-16">
        <img width={578} src={imge} alt="imge" />
      </div>
    </div>
  );
};

export default Banner;
