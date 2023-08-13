const express = require('express');
const axios = require ('axios');
const profileRouter = require('./profile');

const router = express.Router();
router.use(profileRouter);



module.exports = router;