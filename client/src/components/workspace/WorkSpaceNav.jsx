import { useEffect, useState } from "react";
import axios from "axios";
function WorkSpaceNav() {
  const [userDetails, setUserDetails] = useState({
    user: { username: "", email: "" },
    total_teams: 0,
    team: [],
  });
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

  //console.log("USer data :", userDetails);
  useEffect(() => {
    console.log("Updated userDetails:", userDetails);
  }, [userDetails]);

  return (
    <div className="border-b border-gray-300 p-2">
      <nav className="flex  items-center justify-between max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back,{userDetails.user.username} Team Details:
            {userDetails.total_teams}!
          </h1>
          <p className="text-sm">Ready to collaborate today?</p>
        </div>
        {userDetails.total_teams > 0 ? (
          <select className="border px-3 py-1 rounded-md bg-white shadow-sm">
            {userDetails.team.map((t, i) => (
              <option key={i} value={t.team_id._id}>
                {t.team_id.team_name}
              </option>
            ))}
          </select>
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Create Team
          </button>
        )}
      </nav>
    </div>
  );
}

export default WorkSpaceNav;
