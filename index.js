require("dotenv/config");
const appConfig = require("./config");
const app = require("./src/app");

const listener = app.listen(appConfig.port, () => {
	console.log(`Listening on http://localhost:${listener.address().port}`);
});
