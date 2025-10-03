import React from "react";
function Hero() {
  return (
    <div className="bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 p-1 justify-between">
        <div className=" mt-20 flex-1 w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Our Mission:<span className="text-blue-600">Empower</span>
            <br />
            Remote Collaboration
          </h1>
          <p className="mt-5 text-xl text-gray-600">
            We're building the futur of distributed teamwork, connecting <br />
            across the globe with powerful collaboration tools that <br />
            makes distance irrelavant.
          </p>
          <button className="mt-10 mb-10 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Get Started ➞
          </button>
        </div>
        <div className="flex-1 w-100 h-100 justify-center mt-20 w-1/2 m-atuo">
          <img
            className="w-100 h-80  rounded  hover:shadow-lg"
            src="/assets/aboutHero1.png"
            alt="Collaboration"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
