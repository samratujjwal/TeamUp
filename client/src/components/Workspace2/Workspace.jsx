import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import CreateTeam from "./navigation/CreateTeam.jsx";
import CreateProject from "./navigation/createProject.jsx";
import Projects from "./navigation/Projects.jsx";

const Workspace = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    user: { username: "", email: "", _id: "" },
    total_teams: 0,
    team: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:9090/workspace/user", { withCredentials: true })
      .then((res) => setUserDetails(res.data))
      .catch((err) => {
        console.log("Error By getting user Details:", err.message);
      });
  }, []);
  return (
    <div className="overflow-hidden">
      <Sidebar
        userDetails={userDetails}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Header
        userDetails={userDetails}
        onToggleSidebar={() => setSidebarOpen(true)}
      />
      <main className="pt-20 px-6 md:ml-64 h-screen overflow-auto bg-gray-100">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route
            path="/projects"
            element={<Projects userDetails={userDetails} />}
          />
          <Route
            path="/create-team"
            element={<CreateTeam userDetails={userDetails} />}
          />
          <Route
            path="/create-project"
            element={<CreateProject userDetails={userDetails} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default Workspace;
