const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    role_in_team: {
      type: String,
      enum: ["Developer", "Manager", "Member"],
      default: "Member",
    },
    joined_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

teamMemberSchema.index({ user_id: 1, team_id: 1 }, { unique: true });
module.exports = mongoose.model("TeamMember", teamMemberSchema);
