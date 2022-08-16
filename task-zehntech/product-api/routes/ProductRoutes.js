var routes = require("express").Router();
var ProductCtrl = require("../controllers/ProductController")

routes.get("/",ProductCtrl.getProducts);
routes.get("/:id",ProductCtrl.getProductDeatils);

module.exports=routes;
