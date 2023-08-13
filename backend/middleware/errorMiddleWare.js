const handleErrors = function(error,req,res, next){
    console.error(err.stack); //方便debug；
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "internal server error" ;
    res.status (statusCode).json({error: message});
     
}

//全局中间件；


module.exports = { handleErrors }; 