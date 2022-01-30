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
    type:Array,
    default: [],
    required: true,
  },
  category:{
      type: String,
      required: true,
  },
  currentVote: {
    type:Array,
    default: [],
    required: true,
  },
  supporters:{
      type:Array,
      default: [],
      required: true,
  },
  user:{
    type:mongoose.Types.ObjectId,
    required: true,
  }
});

const petition = mongoose.model("Petition", petitionSchema);

module.exports = petition;
