const joi = require("joi");
const bcrypt = require("bcrypt");
const userSchema = require("../model/userModel");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { userName, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new userSchema({
        userName: userName,
        email: email,
        password: hashedPassword,
      });
      user.save()
      res.json({created: true})
    } catch (error) {
        res.json({error:error.message});
    }
  },
};

module.exports = userCtrl;
