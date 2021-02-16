const mongoose = require("mongoose");
const FavoriteVideo = require("./favoriteVideos.model");

exports.store = async function (data) {
	try {
		let model = await FavoriteVideo.create(data);
		return model;
	} catch (e) {
		throw Error(e);
	}
};

exports.listByUser = async function (user) {
	try {
		let records = await FavoriteVideo.find(
			{
				user,
			},
			"_id user"
		).populate("video", "_id title description youtube_url image");
		return records;
	} catch (e) {
		throw Error(e);
	}
};

exports.delete = async function (_id) {
	try {
		await FavoriteVideo.remove({ _id });
		return;
	} catch (e) {
		throw Error(e);
	}
};
