const express = require("express");
const router = express.Router();


router.use('/login',require('./login'))
router.use('/profile',require('./profile'))
router.use('/register',require('./register'));
router.use('/registereduser',require('./registereduser'));

module.exports = router;