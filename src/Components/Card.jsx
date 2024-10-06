import React from "react";
import { cardItems } from "../common/Data";

const Card = () => {
  return (
    <div className="max-h-screen lg:px-14 px-5 pb-10">
      <h1 className="text-5xl font-semibold text-center py-8">My Services</h1>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 lg:py-10">
          {cardItems.map((val, index) => (
            <div key={index} className="bg-lime-600 p-6 rounded">
              <div>
                <img src={val.img} alt="images" className="w-full" />
              </div>
              <div className="mt-6 text-center">
                <h1 className="text-xl font-semibold">{val.title}</h1>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
