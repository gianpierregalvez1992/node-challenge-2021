const mongoose = require("mongoose");
const appConfig = require("./config");

const databaseConnect = async () => {
	try {
		await mongoose.connect(appConfig.database, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
	} catch (error) {
		console.log(`Something went wrong ${error}`);
	}
};

module.exports = databaseConnect;
