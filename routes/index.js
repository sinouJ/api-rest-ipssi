var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

/* GET home page. */
router.route('/').get(userController.getUsers)
router.route('/user').post(userController.createUser)

module.exports = router;
