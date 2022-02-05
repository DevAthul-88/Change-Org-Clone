const Router = require("express").Router();
const petitionCtrl = require("../controllers/petitionCtrl");
const authMiddleware = require("../middleware/auth");

Router.route("/getSigned").get(authMiddleware, petitionCtrl.getSignedPetition);
Router.route("/featured").get(petitionCtrl.featured);
Router.route("/popular").get(petitionCtrl.popular);
Router.route("/recent").get(petitionCtrl.recent);
Router.route("/victory").get(petitionCtrl.victory);
Router.route("/create").post(authMiddleware, petitionCtrl.create);
Router.route("/getByUser").get(authMiddleware, petitionCtrl.getPetitionByUser);
Router.route("/getByDate").get(petitionCtrl.getPetitionByDate);
Router.route("/:id").get(petitionCtrl.getPetitionById);
Router.route("/comment").post(authMiddleware, petitionCtrl.addComment);
Router.route("/removeComment").post(authMiddleware, petitionCtrl.removeComment);

module.exports = Router;
