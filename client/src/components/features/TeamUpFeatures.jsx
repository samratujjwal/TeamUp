function TeamUpFeatures() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Powerful Features for Seamless Collaboration
        </h2>
        <p className="text-gray-600 text-center text-xl mb-10">
          Everything you need to collaborate , all in one platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Code Editing
            </h3>
            <p className="text-gray-600">
              Collaborate on code with live editing, syntax highlighting, and
              instant synchronization across your team.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-2">
              Integrated Video Chat
            </h3>
            <p className="text-gray-600">
              HD video calls and screen sharing built right into your
              workspace.No need for external tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and streamline development processes
              with smart workflow.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">
              Live Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Track team performance and project progress, progrress, and
              productivity metircs in real-time.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p className="text-gray-600">
              Secure file sharing with version control and collaborative editing
              capabilities.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300">
            <div className="text-blue-600 text-3xl mb-4">🗂️</div>
            <h3 className="text-xl font-semibold mb-2">Task Management</h3>
            <p className="text-gray-600">
              Organize projects with Kanban boards and sprint planning, and
              automated progress tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamUpFeatures;
