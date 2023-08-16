const express = require('express');
const axios = require ('axios'); 
const {getProfile} = require('../controllers/profileController');
const profileRouter = express.Router();


// /api/profile get profile; 

profileRouter.get('/', getProfile);


// async await together to use; fetch data;  
module.exports = profileRouter;