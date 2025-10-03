import { useEffect, useState } from "react";
import axios from "axios";

function CreateProjectForm({ teams, users, onSubmit }) {
  ///--------------------------------- CREATE WORKSHOP KA CODE ------------------------------------------///
  const [userDetails, setUserDetails] = useState({
    user: { username: "", email: "", _id: "" },
    total_teams: 0,
    team: [],
  });

  const [data, setData] = useState({});

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

  ///----------------------------------------------------------------------------------------------------///
  const [formData, setFormData] = useState({
    project_name: "",
    team_id: "",
    members: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMemberSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value
    );
    setFormData((prev) => ({ ...prev, members: selected }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      team_id: formData.team_id,
      project_name: formData.project_name,
      description: formData.description,
      created_by: userDetails.user._id,
    };

    try {
      const res = await fetch("http://localhost:9090/workspace/createProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // if you're using cookies/session
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        console.log("✅ Project Created:", result.project);
        alert("Project created successfully!");
        // Optionally reset form
        setFormData({
          project_name: "",
          description: "",
          team_id: "",
          members: [],
        });
      } else {
        console.warn("❌ Error:", result.message);
        alert(result.message || "Failed to create project.");
      }
    } catch (err) {
      console.error("🚨 Submit Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[300px] bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300 flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold text-blue-700">
        Create New Project
      </h2>

      <input
        type="text"
        name="project_name"
        placeholder="Project Name"
        value={formData.project_name}
        onChange={handleChange}
        required
        className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="team_id"
        value={formData.team_id}
        onChange={handleChange}
        required
        className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Team</option>
        {userDetails.team?.length > 0 &&
          userDetails.team.map((team) => (
            <option key={team._id} value={team.team_id._id}>
              {team.team_id.team_name}
            </option>
          ))}
      </select>

      <select
        multiple
        name="members"
        onChange={handleMemberSelect}
        className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Array.isArray(data.projects?.members) &&
          data.projects.members.map((member) => (
            <option key={member._id} value={member._id}>
              {member.username}
            </option>
          ))}
      </select>

      <button
        type="submit"
        className="mt-2 px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        ➕ Create Project
      </button>
    </form>
  );
}

export default CreateProjectForm;
