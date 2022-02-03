const Router = require('express').Router();
const petitionCtrl = require('../controllers/petitionCtrl');
const authMiddleware = require('../middleware/auth');

Router.route("/create").post(authMiddleware , petitionCtrl.create)
Router.route("/getByUser").get(authMiddleware , petitionCtrl.getPetitionByUser)
Router.route("/getByDate").get(petitionCtrl.getPetitionByDate)
Router.route("/:id").get(petitionCtrl.getPetitionById)
Router.route("/comment").post(authMiddleware , petitionCtrl.addComment)
module.exports = Router
