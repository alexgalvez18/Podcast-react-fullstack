const { model, Schema } = require("mongoose");

const nextGuestSchema = new Schema(
  {
    name: String,
    votes: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("nextGuest", nextGuestSchema);
