const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteVideoSchema = Schema(
	{
		user: {
			type: String,
			required: true,
		},
		video: {
			type: Schema.ObjectId,
			ref: "Video",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("FavoriteVideo", FavoriteVideoSchema);
