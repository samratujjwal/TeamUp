import React from "react";
function JoinTeamUp() {
  return (
    <div className="py-10" style={{ backgroundColor: "#246aea" }}>
      <div className=" mx-30 mb-10">
        <h1 className=" text-center text-4xl font-bold text-white">
          Be part of the future of teamwork
        </h1>
        <p className="mt-5 mb-8 text-center text-xl text-white">
          Join thousands of teams already using TeamUp to work smarter together.
        </p>
        <div className="flex justify-center space-x-4 p-2">
          <button className="px-2 py-2 bg-white text-blue-500 font-semibold rounded border border-white hover:bg-blue-600 hover:text-white">
            Get Started with TeamUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinTeamUp;
