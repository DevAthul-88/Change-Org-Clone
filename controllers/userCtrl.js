const bcrypt = require("bcrypt");
const userSchema = require("../model/userModel");
const generateToken = require("../token/token");
const { loginSchema, registerSchema } = require("../validate/auth");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { userName, email, password } = req.body;

      const value = await registerSchema.validate({
        userName: userName,
        email: email,
        password: password,
      });

      if (value.error) return res.json({ error: value.error.message });

      const userExist = await userSchema.findOne({ email: email });

      if (userExist) return res.json({ error: "User already exists" });

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
      if (value.error) return res.json({ error: value.error.message });

      const User = await userSchema.findOne({ email: email });

      if (!User) return res.json({ error: "User not found" });

      const validDatePassword = await bcrypt.compare(password, User.password);

      if (!validDatePassword) return res.json({ error: "Password incorrect" });

      const credentials = {
        _id: User._id,
        email: User.email,
      };

      const token = await generateToken(credentials);
      res.json({ token: token });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = userCtrl;
