//call back function writing in the controllers.
const axios = require('axios');
const getRequest = async function (req,res,next){
    try {
        const url='http://localhost:8000/request';
        const request = await axios.get(url);
        res.status(200).json({
            msg:"get request succeed",
            data: request.data,
        });
    } catch (error) {
        next(error)
    }
}

//export
module.exports = { getRequest };