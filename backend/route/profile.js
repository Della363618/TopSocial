const express = require('express');
const axios = require ('axios'); 
const profileRouter = express.Router();

// /api/profile get profile; 

profileRouter.get('/api/profile', async function(req,res, next){
    try {
        const url= "http://localhost:8000/profile";
        const response = await axios.get(url);
        console.log("response", response.data);
        res.status(200).json({
            msg: "Get file successfully",
            data: response.data
        })
    } catch (error) {
        console.log('error', error);
        next(error);
        //Transmit to the middleware.  
    }
});


// async await together to use; fetch data;  
module.exports = profileRouter;