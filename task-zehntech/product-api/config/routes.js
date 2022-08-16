var routes = require("express").Router();

routes.use("/api/product", require("../routes/ProductRoutes"));
routes.use("/api/category", require("../routes/CategoryRoutes"));

module.exports = routes;