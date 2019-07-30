const { model, Schema } = require("mongoose");

const mailSchema = new Schema(
  {
    email: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("mailList", mailSchema);
