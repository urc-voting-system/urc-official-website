import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero_banner w-full h-fit sm:h-[50vh] md:h-[80vh] pt-14 pb-5 px-[7%] flex items-center justify-center flex-col text-white">
      <h1 className="text-3xl sm:text-6xl font-[600] text-center mt-5">
        Welcome to the UENR <br /> Robotics Club
      </h1>
      <h2 className="capitalize my-3 text-2xl font-semibold tracking-wide text-center">
        Nursing Engineers for our society
      </h2>
      <p className="w-full md:w-[80%] lg:w-[50%] text-xl tracking-wider text-center">
        At UENR Robotics club, we empower engineers by enhancing their skills
        through hands-on learning and cutting-edge technology.
      </p>
      <button className="bg-primary text-white px-5 py-3 rounded-full flex items-center space-x-2 mt-5">
        <span>Join Us Today</span>
      </button>
    </div>
  );
};
export default Hero;
