const developmentConfig = require("./development");
const productionConfig = require("./production");
const env = process.env.NODE_ENV || "development";

const baseConfig = {
	secret: {},
};

let envConfig = {};

switch (env.toUpperCase()) {
	case "PRODUCTION":
	case "PROD":
		envConfig = productionConfig;
		break;

	case "DEVELOPMENT":
	case "DEV":
	default:
		envConfig = developmentConfig;
}

module.exports = { ...baseConfig, ...envConfig };
