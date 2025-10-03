import React from "react";
function Hero() {
  return (
    <div className="p-1 bg-gradient-to-br from-blue-100  to-blue-20">
      <div className="mx-30 mt-10">
        <h1 className="text-center text-5xl font-bold">
          All-in-One Collaboration Hub
        </h1>
        <p className=" text-center text-md p-5">
          Everything your team needs in one place. Code together, chat
          seamlessly, and <br /> boost productivity with intelligent workflow
          automation.
        </p>
        <div className="flex justify-center space-x-4 p-2 mb-10">
          <button className="px-2 py-2 bg-white text-blue-500 font-semibold rounded border border-white hover:bg-blue-600 hover:text-white">
            Join Your Team Today
          </button>
          <button className="px-2 py-2 bg-blue-500 text-white font-semibold rounded border border-white hover:text-blue-600 hover:bg-white">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
