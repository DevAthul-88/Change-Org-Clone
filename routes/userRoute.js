const Router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

Router.route("/create").post(userCtrl.register);

module.exports = Router;
