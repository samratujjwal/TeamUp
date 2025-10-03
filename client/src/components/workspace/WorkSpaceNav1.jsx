import { useEffect, useState } from "react";
import axios from "axios";
import { IoVideocam } from "react-icons/io5";
function WorkSpaceNav1() {
  const [userDetails, setUserDetails] = useState({
    user: { username: "", email: "" },
    total_teams: 0,
    team: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:9090/workspace/userWithTeammember", {
        withCredentials: true,
      })
      .then((res) => setUserDetails(res.data))
      .catch((err) => {
        console.error(
          "Error fetching user:",
          err.response?.data || err.message
        );
      });
  }, []);

  //console.log("USer data :", userDetails);
  useEffect(() => {
    console.log("Updated userDetails:", userDetails);
  }, [userDetails]);

  return (
    <div className="border-b border-gray-300 p-2 bg-gradient-to-br from-blue-100  to-blue-20">
      <nav className="flex  items-center justify-between max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back,
            <span className="text-3xl font-bold text-blue-700">
              {" "}
              {userDetails.user.username}
            </span>
          </h1>
          <p className="text-sm">Ready to collaborate today?</p>
        </div>
        {userDetails.total_teams > 0 ? (
          <div>
            <button className="bg-blue-600 text-white px-3 mx-2 py-1 rounded-md hover:bg-blue-700">
              Create New Team
            </button>
            <select className="border px-3 py-1 rounded-md bg-white shadow-sm">
              {userDetails.team.map((t, i) => (
                <option key={i} value={t.team._id}>
                  {t.team.team_name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Create a Team
            </button>
          </>
        )}
        {userDetails.total_teams > 0 ? (
          <div>
            <button className="bg-gray-600 text-white px-4 py-1 mx-2 rounded-md hover:bg-blue-700">
              <IoVideocam className="inline-block text-xl mr-2" />
              Start call
            </button>
            <select className="border px-3 py-1 rounded-md bg-white shadow-sm">
              {userDetails.team.flatMap((t, i) =>
                t.members.map((m, j) => (
                  <option key={`${i}-${j}`} value={m.email}>
                    {m.username} ({t.team.team_name})
                  </option>
                ))
              )}
            </select>
            <button className="bg-blue-600 text-white px-2 py-1 mx-2 rounded-md hover:bg-blue-700">
              Add Members
            </button>
          </div>
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Members
          </button>
        )}
      </nav>
    </div>
  );
}

export default WorkSpaceNav1;
