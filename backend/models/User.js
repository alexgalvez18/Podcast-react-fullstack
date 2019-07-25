const { model, Schema } = require("mongoose");
const plm = require("passport-local-mongoose");

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    role: {
      type: String,
      enum: ["GUEST", "ADMIN"],
      default: "GUEST"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

UserSchema.plugin(plm, { usenameField: "username" });

module.exports = model("User", UserSchema);
