require("dotenv/config");

const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const databaseConnect = require("../database");
const { routes } = require("./routes");
const appConfig = require("../config");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

/// ROUTES
app.use("/api", routes);
//////

databaseConnect();
//////

// const listener = app.listen(appConfig.port, () => {
// 	console.log(`Listening on http://localhost:${listener.address().port}`);
// });

module.exports = app;
