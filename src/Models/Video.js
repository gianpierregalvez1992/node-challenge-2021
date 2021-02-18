const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
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

VideoSchema.method("create", function (data) {
	return this.model("Video").create(data);
});

VideoSchema.method("update", function (id, data) {
	return this.model("Video").findOneAndUpdate({ _id: id }, data);
});

VideoSchema.method("listByUser", function (user) {
	return this.model("Video").find(
		{
			user,
		},
		"_id title description youtube_url image"
	);
});
VideoSchema.method("delete", function (id) {
	return this.model("Video").remove({ _id: id });
});

module.exports = mongoose.model("Video", VideoSchema);
