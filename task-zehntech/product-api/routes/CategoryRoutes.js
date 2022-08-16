var routes = require("express").Router();
var CategoryCtrl = require("../controllers/CategoryController")

routes.get("/",CategoryCtrl.getCategory);

module.exports=routes;
