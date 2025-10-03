const {
  Signup,
  Login,
  CreateTeam,
  getUserDetails,
  addTeamMember,
  createProject,
  getUsersProjects,
  teamsWithMembers,
  getProjectTree,
  createFolder,
  createFile,
  getFile,
  updateFile,
} = require("../controllers/authController.js");
const { userVerification } = require("../middleware/authMiddleware.js");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.get("/workspace/user", getUserDetails);
router.get("/workspace/userWithTeammember", teamsWithMembers);
router.post("/createTeam", CreateTeam);
router.post("/workspace/add-member", addTeamMember);
router.post("/workspace/createProject", createProject);
router.get("/workspace/:userId", getUsersProjects);
router.post("/workspace/:project_id/createfolder", createFolder);
router.post("/workspace/:project_id/createfile", createFile);
router.get("/workspace/:file_id/getfile", getFile);
router.put("/workspace/:file_id/updateFile", updateFile);
router.get("/workspace/Projects/:projectId/tree", getProjectTree);
module.exports = router;
