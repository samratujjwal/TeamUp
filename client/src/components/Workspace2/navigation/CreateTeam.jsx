import { useState } from "react";
import axios from "axios";

export default function CreateTeam({ userDetails }) {
  const { user, team } = userDetails;
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([""]);

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const addMemberField = () => setMembers([...members, ""]);
  const removeMemberField = (index) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        team_name: teamName,
        description,
        created_by: user._id,
        members,
      };
      const res = await axios.post("http://localhost:9090/createTeam", payload);
      alert(res.message);
    } catch (err) {
      alert("Error: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create New Team</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Team Name
        </label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
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

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Team Members (Emails)
        </label>
        {members.map((email, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="member@example.com"
              required
            />
            {members.length > 1 && (
              <button
                type="button"
                onClick={() => removeMemberField(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addMemberField}
          className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm"
        >
          + Add another member
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Create Team
      </button>
    </form>
  );
}
