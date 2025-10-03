import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateWorkSpace() {
  const [userDetails, setUserDetails] = useState({
    user: { username: "", email: "", _id: "" },
    total_teams: 0,
    team: [],
  });

  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9090/workspace/user", { withCredentials: true })
      .then((res) => setUserDetails(res.data))
      .catch((err) => {
        console.error(
          "Error fetching user:",
          err.response?.data || err.message
        );
      });
  }, []);
  useEffect(() => {
    if (userDetails?.user?._id) {
      fetchUserProjects(userDetails.user._id);
    }
  }, [userDetails]);

  // const userId = userDetails.user._id;
  console.log("UserId=", userDetails.user._id);
  console.log("User Details=", userDetails);
  console.log("Project Data =", data);
  const fetchUserProjects = async (userId) => {
    try {
      const res = await fetch(`http://localhost:9090/workspace/${userId}`);
      const data = await res.json();
      setData(data);
      console.log("Projects Fetched :", data.projects);
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };
  const projectOpen = (projectId) => () => {
    console.log("Open click Project Id:", projectId);
    navigate(`/workspace/${projectId}/project`);
  };
  return (
    <div className="bg-gray-50 p-1 h-screen w-full">
      <div className="max-w-6xl  m-auto">
        <div className=" mb-10 p-5">
          <input
            className="rounded p-2 bg-white border border-gray-200 mt-5 w-md focus:"
            type="text"
            placeholder="search your workspace"
          />
        </div>
        <div className="max-w-6xl mx-auto p-6 space-y-6">
          <div className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-700 cursor-pointer">
            <button>
              <h2 className="text-xl font-semibold">Create New Project</h2>
              <p className="text-sm text-blue-100">
                Start a new collaborative project.
              </p>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="w-[250px] bg-blue-600 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300 flex flex-col justify-between">
              <div>
                <span className="text-white text-center text-3xl mb-4  m-auto rounded-full ">
                  &#8853;
                </span>
                <h3 className="text-xl text-white font-semibold mb-2">
                  Create a new Project
                </h3>
                <p className="text-white text-sm">
                  Start a new collaborative project.
                </p>
              </div>
            </div>
            {Array.isArray(data?.projects) && data.projects.length > 0 ? (
              data.projects.map((ws, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-blue-600 text-3xl mb-4">📁</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {ws.project_name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Last edited by{" "}
                      <span className="font-medium">
                        {ws.updated_by.username}
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Edited{" "}
                      <span className="font-medium">
                        {ws.updated_by.username}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={projectOpen(ws._id)}
                    className="mt-6 px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 self-start"
                  >
                    Open
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Create Projects Now</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkSpace;
