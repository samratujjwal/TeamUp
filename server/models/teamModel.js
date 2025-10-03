const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Team", teamSchema);
