import React from "react";
function Journey() {
  return (
    <div className="p-1 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 p-3 justify-between space-x-10 justify-center">
        <div className="w-1/2 mb-10">
          <h1 className="text-3xl font-bold">Our Journey</h1>
          <h3 className="text-md text-gray-600 mt-3 font-bold my-2 text-xl">
            <span className="p-1 bg-blue-600 border rounded-md text-white  mr-2">
              1
            </span>
            August, 2025- The Vision
          </h3>
          <p className="mr-2 text-gray-600 text-md">
            Borm from the challeges of remote work during the college project,
            we saw the need for better collaboration tools.
          </p>
          <h3 className="text-md text-gray-600 mt-3 font-bold my-2 text-xl">
            <span className="p-1 bg-green-600 border rounded-md text-white  mr-2">
              2
            </span>
            September, 2025- The Start
          </h3>
          <p className="mr-2 text-gray-600 text-md">
            Borm from the challeges of remote work during the college project,
            we saw the need for better collaboration tools.
          </p>
          <h3 className="text-md text-gray-600 mt-3 font-bold my-2 text-xl">
            <span className="p-1 bg-orange-600 border rounded-md text-white  mr-2">
              3
            </span>
            October, 2025- The Build
          </h3>
          <p className="mr-2 text-gray-600 text-md">
            Borm from the challeges of remote work during the college project,
            we saw the need for better collaboration tools.
          </p>
          <h3 className="text-md text-gray-600 mt-3 font-bold my-2 text-xl">
            <span className="p-1 bg-purple-600 border rounded-md text-white  mr-2">
              4
            </span>
            November, 2025- The Launch
          </h3>
          <p className="mr-2 text-gray-600 text-md">
            Borm from the challeges of remote work during the college project,
            we saw the need for better collaboration tools.
          </p>
        </div>
        <div className="flex-1 w-1/2 ">
          <img
            className="w-130 h-100 rounded-lg items-center"
            src="/assets/journey.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Journey;
