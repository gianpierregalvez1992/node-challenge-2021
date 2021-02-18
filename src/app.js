const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const databaseConnect = require("../database");
const { routes } = require("./Routes");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

/// ROUTES
app.use("/api", routes);
//////

databaseConnect();
//////

module.exports = app;
