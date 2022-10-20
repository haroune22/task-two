const express = require("express")
const Router = express.Router();
const routescontroler = require("../controller/index")



module.exports = () => {

    Router.get('/',(req,res)=>{
        res.render('layouts',{
            template:"index"
        })
    })
    Router.get('/Home',routescontroler.gethome)
    
    Router.get('/contactus',routescontroler.getcontactus)
    Router.get('/ourservises',(req,res)=>{
        res.render('layouts',{
            template:"ourservises"
        })
    })
    return Router;
};