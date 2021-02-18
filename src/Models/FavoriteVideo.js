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

FavoriteVideoSchema.method("create", function (data) {
	return this.model("FavoriteVideo").create(data);
});

FavoriteVideoSchema.method("listByUser", function (user) {
	return this.model("FavoriteVideo")
		.find(
			{
				user,
			},
			"_id user"
		)
		.populate("video", "_id title description youtube_url image");
});

FavoriteVideoSchema.method("delete", function (id) {
	return this.model("FavoriteVideo").remove({ _id: id });
});

module.exports = mongoose.model("FavoriteVideo", FavoriteVideoSchema);
