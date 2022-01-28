const mongoose = require("mongoose");

const petitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expectedVote: {
    type: Number,
    default: 0,
    required: true,
  },
  category:{
      type: String,
      required: true,
  },
  currentVote: {
    type: Number,
    default: 0,
    required: true,
  },
  supported:{
      type:Array,
      default: [],
      required: true,
  }
});

const petition = mongoose.model("Petition", petitionSchema);

module.exports = petition;
