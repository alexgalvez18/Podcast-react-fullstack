const { model, Schema } = require("mongoose");
const multer = require("multer");

const podcastSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    guest: {
      type: String,
      required: true
    },
    episodeNumber: {
      type: Number,
      required: true
    },
    airDate: {
      type: String,
      required: false
    },
    // Hay q cambiar el audio al formato correcto, revisar con multer
    audioFile: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Episode", podcastSchema);
