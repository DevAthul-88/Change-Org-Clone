const joi = require("joi");
const bcrypt = require("bcrypt");
const userSchema = require("../model/userModel");

const loginSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  // password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(6).max(12),
});

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
      user.save();
      res.json({ created: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const value = await loginSchema.validate({ email: email });
      if (value.error) return res.json({ error: value.error.message  });

      const User = await userSchema.findOne({ email: email });

      if (!User) return res.json({ error: "User not found" });

      const validDatePassword = await bcrypt.compare(password, User.password);

      if (!validDatePassword) return res.json({ error: "Password incorrect" });

      res.json({ user: User });
    } catch (error) {
      res.json({ error: error.message  });
    }
  },
};

module.exports = userCtrl;
