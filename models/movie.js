const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type: String, required: true },
  actor: { type: String, required: true },
  actress: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
