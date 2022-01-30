const Router = require('express').Router();
const petitionCtrl = require('../controllers/petitionCtrl');
const authMiddleware = require('../middleware/auth');

Router.route("/create").post(authMiddleware , petitionCtrl.create)

module.exports = Router
