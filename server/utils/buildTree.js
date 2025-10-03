const Folder = require("../models/folderModel.js");
const File = require("../models/fileModel.js");

module.exports.buildTree = async (projectId) => {
  const folders = await Folder.find({ project_id: projectId }).lean();
  const files = await File.find({ project_id: projectId }).lean();

  const folderMap = {};
  folders.forEach(
    (f) =>
      (folderMap[f._id.toString()] = {
        id: f._id,
        name: f.folder_name,
        type: "folder",
        children: [],
      })
  );

  const fileMap = {};
  files.forEach(
    (file) =>
      (fileMap[file._id.toString()] = {
        id: file._id,
        name: file.file_name,
        type: "file",
      })
  );

  files.forEach((file) => {
    if (file.folder_id) {
      folderMap[file.folder_id.toString()].children.push(
        fileMap[file._id.toString()]
      );
    }
  });

  folders.forEach((f) => {
    if (f.parent_folder_id) {
      folderMap[f.parent_folder_id.toString()].children.push(
        folderMap[f._id.toString()]
      );
    }
  });

  const rootChildren = [];
  folders.forEach((f) => {
    if (!f.parent_folder_id) rootChildren.push(folderMap[f._id.toString()]);
  });
  files.forEach((f) => {
    if (!f.folder_id) rootChildren.push(fileMap[f._id.toString()]);
  });

  return rootChildren;
};
