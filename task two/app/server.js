const express = require('express');
const path =require('path');
const app = express();
const PORT = 4500;
const myRouter = require("./Routes")


app.use((req,res,next)=>{
    console.log("Time:", Date.now()); 
    next();   
})
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use("/",myRouter())
app.listen(PORT,()=> console.log(`APP is listening on PORT ${PORT}`))