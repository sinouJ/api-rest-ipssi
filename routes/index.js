var express = require('express');
const authorController = require('../controllers/authorController');
var router = express.Router();

const userController = require('../controllers/userController')

/* GET home page. */
router.route('/').get(userController.getUsers)
router.route('/user').post(userController.createUser)
router.route('/user/:id').delete(userController.deleteUser)
router.route('/user/:id').get(userController.getUser)

router.route('/author').post(authorController.createAuthor)
router.route('/article').post(authorController.createArticle)
router.route('/article/:author').get(authorController.findArticlesByUserId)

module.exports = router;
