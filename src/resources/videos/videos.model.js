const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = Schema(
	{
		user: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		youtube_url: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Video", VideoSchema);
