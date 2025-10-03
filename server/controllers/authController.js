const teamMembers = require("../models/teamMembers.js");
const Team = require("../models/teamModel.js");
const User = require("../models/userModel.js");
const Project = require("../models/projectModel.js");
const Folder = require("../models/folderModel.js");
const File = require("../models/fileModel.js");
const { createSecretToken } = require("../utils/SecretToken.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { getLanguageFromExtension } = require("../utils/detectLanguage.js");
const { buildTree } = require("../utils/buildTree.js");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.CreateTeam = async (req, res) => {
  try {
    const { team_name, description, created_by, members } = req.body;

    const newTeam = await Team.create({
      team_name,
      description,
      created_by,
    });

    const teamMemberDocs = [
      {
        user_id: created_by,
        team_id: newTeam._id,
        role_in_team: "Manager",
      },
    ];

    if (Array.isArray(members)) {
      const users = await User.find({ email: { $in: members } });
      users.forEach((user) => {
        teamMemberDocs.push({
          user_id: user._id,
          team_id: newTeam._id,
          role_in_team: "Member",
        });
      });
    }
    // await teamMembers.create({
    //   user_id: created_by,
    //   team_id: newTeam._id,
    //   role_in_team: "Manager",
    // });

    await teamMembers.insertMany(teamMemberDocs);
    res.status(201).json({ message: "Team Created", team: newTeam });
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
};

module.exports.getUserDetails = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("username email");
    const teams = await teamMembers
      .find({ user_id: user._id })
      .populate("team_id");

    res.json({ user: user, total_teams: teams.length, team: teams });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
////////////////------------------------------///////////////////
module.exports.teamsWithMembers = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("username email");
    const teams = await teamMembers
      .find({ user_id: user._id })
      .populate("team_id");

    const Members = await Promise.all(
      teams.map(async (teamEntry) => {
        const members = await teamMembers
          .find({ team_id: teamEntry.team_id._id })
          .populate("user_id", "username email"); // only return basic user info

        return {
          team: teamEntry.team_id,
          role: teamEntry.role_in_team,
          members: members.map((m) => ({
            username: m.user_id.username,
            email: m.user_id.email,
            role: m.role_in_team,
          })),
        };
      })
    );

    res.json({ user: user, total_teams: teams.length, team: Members });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
///////////////----------------------------------------/////////////////////

module.exports.addTeamMember = async (req, res) => {
  try {
    const { team_id, email, role_in_team } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No User found with this email" });
    }
    const alreadyMember = await teamMembers.findOne({
      user_id: user._id,
      team_id,
    });
    if (alreadyMember) {
      return res
        .status(400)
        .json({ message: "User is alraedy a member of this team" });
    }

    const newMember = await teamMembers.create({
      user_id: user._id,
      team_id,
      role_in_team: role_in_team || "Member",
    });

    res
      .status(201)
      .json({ message: "Member added successfully", member: newMember });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.createProject = async (req, res) => {
  try {
    const { team_id, project_name, description, created_by } = req.body;
    const team = await Team.findById(team_id);
    if (!team) {
      return res.status(404).json({ message: "Team not Found" });
    }

    const isMember = await teamMembers.findOne({
      user_id: created_by,
      team_id,
    });
    if (!isMember) {
      return res
        .status(403)
        .json({ message: "You are not member of this Team" });
    }

    const newProject = await Project.create({
      team_id,
      project_name,
      description,
      members: [created_by],
      updated_by: created_by,
    });

    res
      .status(201)
      .json({ message: "Project Created successfully", project: newProject });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUsersProjects = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("User Id recieved from Projects:", userId);
    const usersProject = await Project.find({
      members: new mongoose.Types.ObjectId(userId),
    })
      .populate("team_id", "team_name")
      .populate("updated_by", "username email")
      .populate("members", "username email");
    // Yaha se populate karke ham taem aur team member updated_by sab nikal sakte h utni bar populate karke
    res.status(200).json({
      total_projects: usersProject.length,
      projects: usersProject,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.createFolder = async (req, res) => {
  try {
    const { project_id } = req.params;
    const { folder_name, parent_folder_id, created_by } = req.body;
    const newFolder = new Folder({
      project_id,
      folder_name,
      parent_folder_id: parent_folder_id || null,
      created_by,
    });
    await newFolder.save();
    res
      .status(201)
      .json({ success: true, message: "Folder created", newFolder });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.createFile = async (req, res) => {
  try {
    const { project_id } = req.params;
    const { folder_id, file_name, content, created_by } = req.body;

    const language = getLanguageFromExtension(file_name);
    const newFile = new File({
      project_id,
      folder_id: folder_id || null,
      file_name,
      language,
      created_by,
    });
    await newFile.save();
    res.status(201).json({ success: true, message: "File Created", newFile });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getProjectTree = async (req, res) => {
  try {
    const { projectId } = req.params;
    //console.log("projectId:", projectId);
    const project = await Project.findById(projectId).lean();
    if (!project)
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });

    const tree = await buildTree(projectId);

    res.json({
      success: true,
      project: {
        id: project._id,
        name: project.project_name,
        type: "project",
        children: tree,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.getFile = async (req, res) => {
  try {
    const { file_id } = req.params;
    const file = await File.findById(file_id);
    res.status(201).json({ success: true, file });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.updateFile = async (req, res) => {
  const { file_id } = req.params;
  const { content } = req.body;
  // console.log("File Id=", file_id, "  Content:", content);
  try {
    const updatedFile = await File.findByIdAndUpdate(
      file_id,
      { content, updated_at: new Date() },
      { new: true }
    );

    if (!updatedFile) {
      return res
        .status(404)
        .json({ success: false, message: "File not found" });
    }

    res.json({ success: true, file: updatedFile });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
