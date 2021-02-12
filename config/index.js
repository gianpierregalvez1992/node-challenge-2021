const merge = require("lodash.merge");
const developmentConfig = require("./development");
const productionConfig = require("./production");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV;

const baseConfig = {
	secret: {},
};

let envConfig = {};

switch (env.toUpperCase()) {
	case "DEVELOPMENT":
	case "DEV":
		envConfig = developmentConfig;
		break;

	case "PRODUCTION":
	case "PROD":
		envConfig = productionConfig;
		break;

	default:
		envConfig = developmentConfig;
}

module.exports = merge(baseConfig, envConfig);
