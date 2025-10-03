const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    folder_name: {
      type: String,
      required: true,
      trim: true,
    },

    parent_folder_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      default: null, // Koi parent folder nhi h
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Folder", folderSchema);
