const Router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

Router.route("/create").post(userCtrl.register);
Router.route("/login").post(userCtrl.login)

module.exports = Router;
