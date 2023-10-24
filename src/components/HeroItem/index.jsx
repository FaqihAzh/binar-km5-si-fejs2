import React from "react";
import bg from "../../assets/img/bg.jpg";

const HeroItem = () => {
  return (
    <div
      className="py-24 sm:py-36 w-full relative bg-center bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="flex flex-col gap-4 justify-center items-start absolute w-3/4 px-4 md:px-24 inset-0">
        <h1 className="text-4xl font-bold text-white">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          rerum ad nulla similique ducimus numquam minus vel inventore amet,
          voluptatum eius ratione, nobis alias accusantium pariatur in!
          Delectus, minima nulla.
        </p>
        <button className="px-4 py-2 font-medium rounded-full text-white bg-red-600 w-full md:w-1/4 flex items-center justify-center text-lg">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default HeroItem;
