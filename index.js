require("dotenv/config");

const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const databaseConnect = require("./database");
const { routes } = require("./src/routes");
const appConfig = require("./config");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// app.use('/assets', express.static(path.join(__dirname,'assets')));
// app.locals.basedir = appConfig.path + "/assets";

/// ROUTES
app.use("/api", routes);
//////

databaseConnect();
//////

const listener = app.listen(appConfig.port, () => {
	console.log(`Listening on http://localhost:${listener.address().port}`);
});
