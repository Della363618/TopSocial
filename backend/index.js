//npm init
//npm i express 框架
//npm i cors axios json-server 
//npm i nodemon concurrently - D
//concurrently script 合并command 去 run
//json.server and db.json to json file

const express = require('express');
const cors = require('cors');
//create total router 
const router = require('./route/index');
const { handleErrors } = require("./middleware/errorMiddleWare");
//create web server,
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors)


const PORT = 80; 
app.listen(PORT, function(){
    console.log("Server is running on http://localhost:80");
})
//npm run server
//npm run dev
module.exports=router;





// app.use SEQUENCE:
//app.use(express.json())/parse Json request 
// app.use(express.urlencoded({extended:true}))//parse URL-
// app.use(cors);
// app.use(authmiddleware) custom Authentication middleware; 
// app.use(routes); router InputHandler;
//app.use(handleErrors);error handling middleware;


