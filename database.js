const mongoose = require("mongoose");
const appConfig = require("./config");

const databaseConnect = async (config = appConfig) => {
	try {
		await mongoose.connect(config.database, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.log(`Something went wrong ${error}`);
	}
};

module.exports = databaseConnect;
