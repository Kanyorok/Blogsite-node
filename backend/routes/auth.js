const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/authcontroller');

router.route('/register').post(registerUser);


module.exports = router;