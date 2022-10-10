const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  actor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Actor",
  },
  year: {
    type: Date,
  },
  AddedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", movieSchema);

//   coverImage: {
//     type: Buffer,
//     required: true
//   },
//   coverImageType: {
//     type: String,
//     required: true
//   },
