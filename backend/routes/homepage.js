const express = require('express');
const router = express.Router();
const { homePage } = require('../controllers/homepagecontroller');

router.route('/').get(homePage);

module.exports = router;