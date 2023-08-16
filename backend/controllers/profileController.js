const axios = require ('axios'); 

const getProfile = async function(req,res, next){
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
};

module.exports={getProfile};