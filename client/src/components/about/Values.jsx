import React from "react";
function Values() {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-center text-xl mb-10">
          The Principle that guide everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-blue-50 inline text-3xl mb-4 rounded-lg">👁️</div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">
              Collaborate on code with live editing, syntax highlighting, and
              instant synchronization across your team.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-green-600 inline text-3xl mb-4 rounded-lg">
              💡
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              HD video calls and screen sharing built right into your
              workspace.No need for external tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-orange-600 inline text-3xl mb-4 rounded-lg">
              🤝
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and streamline development processes
              with smart workflow.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-blue-600 text-3xl mb-4 inline rounded-lg ">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-2">Trust</h3>
            <p className="text-gray-600">
              Track team performance and project progress, progrress, and
              productivity metircs in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
