const Router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const authMiddleware = require("../middleware/auth");

Router.route("/:id").get(authMiddleware , userCtrl.getUserById)
Router.route("/create").post(userCtrl.register);
Router.route("/login").post(userCtrl.login);
Router.route("/edit").post(authMiddleware , userCtrl.edit)

module.exports = Router;
