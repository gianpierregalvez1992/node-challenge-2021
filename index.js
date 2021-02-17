require("dotenv/config");
const appConfig = require("./config");
const app = require("./src/app");
app.listen(appConfig.port);
