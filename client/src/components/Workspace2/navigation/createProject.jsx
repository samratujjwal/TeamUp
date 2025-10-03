import { useState } from "react";
import axios from "axios";

export default function CreateProjectForm({ userDetails }) {
  const { user, team } = userDetails;
  console.log(
    "User from create project:",
    user,
    "Teams from create project:",
    team
  );
  const [selectedTeam, setSelectedTeam] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        team_id: selectedTeam,
        project_name: projectName,
        description,
        created_by: user._id,
      };
      const res = await axios.post(
        "http://localhost:9090/workspace/createProject",
        payload
      );
      alert(res.message);
      setProjectName("");
      setDescription("");
      setSelectedTeam("");
    } catch (err) {
      alert("❌ Error: " + err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create New Project</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Team
        </label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">-- Choose a team --</option>
          {team.map((t) => (
            <option key={t.team_id._id} value={t.team_id._id}>
              {t.team_id.team_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Creating..." : "Create Project"}
      </button>
    </form>
  );
}
