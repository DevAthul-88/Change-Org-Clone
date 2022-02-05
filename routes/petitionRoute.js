const Router = require("express").Router();
const petitionCtrl = require("../controllers/petitionCtrl");
const authMiddleware = require("../middleware/auth");

Router.route("/getSigned").get(authMiddleware, petitionCtrl.getSignedPetition);
Router.route("/featured").get(petitionCtrl.featured);
Router.route("/popular").get(petitionCtrl.popular);
Router.route("/recent").get(petitionCtrl.recent);
Router.route("/victory").get(petitionCtrl.victory);
Router.route("/getByDate").get(petitionCtrl.getPetitionByDate);
Router.route("/create").post(authMiddleware, petitionCtrl.create);
Router.route("/getByUser").get(authMiddleware, petitionCtrl.getPetitionByUser);
Router.route("/:id").get(petitionCtrl.getPetitionById);
Router.route("/edit").patch(authMiddleware, petitionCtrl.editPetition);
Router.route("/declare").post(authMiddleware, petitionCtrl.declareVictory)
Router.route("/comment").post(authMiddleware, petitionCtrl.addComment);
Router.route("/removeComment").post(authMiddleware, petitionCtrl.removeComment);

module.exports = Router;
