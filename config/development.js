const developmentConfig = {
	port: process.env.PORT || 3000,
	database: process.env.DATABASE,
};
console.log(process.env);
module.exports = developmentConfig;
