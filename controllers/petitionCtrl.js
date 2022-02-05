const petitionSchema = require("../model/petitionModel");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

module.exports = {
  getSignedPetition: async (req, res) => {
    try {
      const { _id } = req.user;
      const data = await petitionSchema.find({
        "supporters.id": objectId(_id),
      });
      if (data.length < 1) return res.json({ message: "Nothing found" });
      res.json(data);
    } catch (error) {
      console.log(error.error);
      res.json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      console.log(req.body);
      const { message } = req.body;
      const id = req.user._id;
      const petition = new petitionSchema({
        title: req.body.title,
        description: req.body.description,
        expectedVote: req.body.goal,
        category: req.body.category,
        supporters: {
          user: req.user.userName,
          id: id,
          message: message,
          createdAt: Date.now(),
        },
        user: {
          userName: req.user.userName,
          id: id,
        },
      });
      await petition.save();
      res.json({ status: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getPetitionByUser: async (req, res) => {
    try {
      const user = req.user._id;
      const data = await petitionSchema.find({ "user.id": user });
      if (data.length < 1) return res.json({ message: "Nothing found" });

      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getPetitionByDate: async (req, res) => {
    try {
      const petition = await petitionSchema
        .find()
        .sort({ createdAt: -1 })
        .limit(20);
      if (petition.length < 1) return res.json({ message: "Nothing found" });
      res.json({ data: petition });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getPetitionById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await petitionSchema.findById({ _id: id });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addComment: async (req, res) => {
    try {
      const { userName, _id } = req.user;
      const { id, message } = req.body;

      const comment = {
        user: userName,
        _id: _id,
        message: message,
      };

      await petitionSchema.updateOne(
        { _id: id },
        { $push: { supporters: comment } }
      );
      const pet = await petitionSchema.findOne({ _id: id });
      res.json({ message: "Your vote has been added successfully", data: pet });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  removeComment: async (req, res) => {
    try {
      const { id } = req.body;
      const removed = await petitionSchema.updateOne(
        { _id: id },
        { $pull: { supporters: { _id: req.user._id } } }
      );

      if (removed) {
        const pet = await petitionSchema.findById(id);
        res.json({ status: true, data: pet });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  featured: async (req, res) => {
    try {
      const data = await petitionSchema.find();
      if (data.length < 1) return res.json({ message: "Nothing found" });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  popular: async (req, res) => {
    try {
      const data = await petitionSchema.find().sort({ supporters: 1 });
      if (data.length < 1) return res.json({ message: "Nothing found" });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  recent: async (req, res) => {
    try {
      const data = await petitionSchema.find().sort({ createdAt: 1 });
      if (data.length < 1) return res.json({ message: "Nothing found" });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  victory: async (req, res) => {
    try {
      const data = await petitionSchema.find({ completed: true });
      if (data.length < 1) return res.json({ message: "Nothing found" });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  editPetition: async (req, res) => {
    try {
      const { title, description, goal, petitionId, userId } =
        req.body.credentials;
      const data = await petitionSchema.updateOne(
        { _id: objectId(petitionId), "user.id": objectId(userId) },
        {
          $set: {
            title: title,
            description: description,
            expectedVote: goal,
          },
        }
      );
      if (data.modifiedCount == 1) {
        const data = await petitionSchema.findById(petitionId);
        res.json({ status: true, data: data });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  declareVictory: async (req, res) => {
    try {
      console.log(req.body);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
};
