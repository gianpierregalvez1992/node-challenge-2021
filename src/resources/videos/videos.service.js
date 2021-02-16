const mongoose = require("mongoose");
const Video = require("./videos.model");

exports.store = async function (data) {
	try {
		let model = await Video.create(data);
		return model;
	} catch (e) {
		throw Error(e);
	}
};

exports.update = async function (_id, data) {
	try {
		let model = await Video.findOneAndUpdate({ _id }, data);
		return model;
	} catch (e) {
		throw Error(e);
	}
};

exports.listByUser = async function (user) {
	try {
		let records = await Video.find(
			{
				user,
			},
			"_id title description youtube_url image"
		);
		return records;
	} catch (e) {
		throw Error(e);
	}
};

exports.delete = async function (_id) {
	try {
		await Video.remove({ _id });
		return;
	} catch (e) {
		throw Error(e);
	}
};
