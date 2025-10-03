import React from "react";
function Team() {
  return (
    <div className="p-1 mt-10">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center">Meet Our Team</h1>
        <p className="text-xl text-gray-600 text-center">
          The passonate people behind TeamUp
        </p>
      </div>
      <div className=" mb-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 p-3  space-x-10 justify-center">
        <div className="w-64 h-72 p-6 rounded-lg hover:shadow-lg overflow-hidden border border-gray-300">
          <img
            className="h-20 w-20 rounded-full mx-auto"
            src="/assets/ujjwal93.png"
            alt="Team"
          />
          <h1 className="font-bold text-center mt-2">Ujjwal Maurya</h1>
          <span className="text-blue-600 block text-center">CEO & Founder</span>
          <p className="text-sm mt-2 text-center break-words overflow-hidden text-ellipsis">
            MERN STACK DEVELOPER Btech 3rd Year Student passionate about
            scalable systems, community-driven tech, and building polished
            UI/UX.
          </p>
        </div>

        <div className="w-64 h-72 p-6 rounded-lg hover:shadow-lg overflow-hidden border border-gray-300">
          <img
            className="h-20 w-20 rounded-full mx-auto"
            src="/assets/ujjwal93.png"
            alt="Team"
          />
          <h1 className="font-bold text-center mt-2">Ujjwal Maurya</h1>
          <span className="text-blue-600 block text-center">CEO & Founder</span>
          <p className="text-sm mt-2 text-center break-words overflow-hidden text-ellipsis">
            MERN STACK DEVELOPER Btech 3rd Year Student passionate about
            scalable systems, community-driven tech, and building polished
            UI/UX.
          </p>
        </div>
        <div className="w-64 h-72 p-6 rounded-lg hover:shadow-lg overflow-hidden border border-gray-300">
          <img
            className="h-20 w-20 rounded-full mx-auto"
            src="/assets/ujjwal93.png"
            alt="Team"
          />
          <h1 className="font-bold text-center mt-2">Ujjwal Maurya</h1>
          <span className="text-blue-600 block text-center">CEO & Founder</span>
          <p className="text-sm mt-2 text-center break-words overflow-hidden text-ellipsis">
            MERN STACK DEVELOPER Btech 3rd Year Student passionate about
            scalable systems, community-driven tech, and building polished
            UI/UX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
