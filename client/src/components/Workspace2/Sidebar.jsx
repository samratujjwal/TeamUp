import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { IoCreateSharp } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { FaRegFilePowerpoint } from "react-icons/fa";
const Sidebar = ({ isOpen, onClose, userDetails }) => {
  const { user } = userDetails;
  return (
    <aside
      className={`bg-blue-50 text-gray-600 fixed top-0 left-0 h-screen w-64 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:flex md:flex-col md:justify-between`}
    >
      <div>
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-2">
          <button onClick={onClose} className="text-xl font-bold text-gray-600">
            ❌
          </button>
        </div>

        <div className="p-4 flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm">Good Day 👋</p>
            <h2 className="text-lg font-bold text-blue-600">{user.username}</h2>
          </div>
        </div>

        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-3 py-2 rounded bg-white text-md focus:outline-none"
          />
        </div>

        <nav className="mt-4 space-y-2 px-4">
          <Link to={"/workspace/projects"}>
            <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer font-semibold hover:text-blue-600">
              <span className="text-lg">
                <FaRegFilePowerpoint />
              </span>
              <span>Your Projects</span>
            </div>
          </Link>
          <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer font-semibold hover:text-blue-600">
            <span className="text-lg">
              <PiMicrosoftTeamsLogoBold />
            </span>
            <span>Teams</span>
          </div>
          <Link to={"/workspace/create-team"}>
            <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer font-semibold hover:text-blue-600">
              <span className="text-lg">
                <RiTeamFill />
              </span>
              <span>Create Teams</span>
            </div>
          </Link>
          <Link to={"/workspace/create-project"}>
            <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer font-semibold hover:text-blue-600">
              <span className="text-lg">
                <IoCreateSharp />
              </span>
              <span>Create Projects</span>
            </div>
          </Link>
          <div className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer font-semibold hover:text-blue-600">
            <span className="text-lg">
              <MdAnalytics />
            </span>
            <span>WorkSpace Analytics</span>
          </div>
        </nav>
      </div>

      <div className="px-4 py-4 space-y-2 text-sm">
        <button className="hover:underline">Privacy</button>
        <button className="hover:underline">Terms</button>
        <button className="hover:underline text-red-400">Log out</button>
      </div>
    </aside>
  );
};

export default Sidebar;
