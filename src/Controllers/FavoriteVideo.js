const FavoriteVideo = require("../Models/FavoriteVideo");
const { createValidation } = require("../Validations/FavoriteVideo");

const create = async function (request, response, next) {
	const { error } = await createValidation({
		...request.body,
		...request.params,
	});
	if (error) {
		let errorResponse = {
			error: true,
			details: error.details,
		};
		return response.status(422).json(errorResponse);
	}

	try {
		await new FavoriteVideo().create({ ...request.body, ...request.params });

		return response
			.status(200)
			.json({ error: false, message: "Video favorito agregado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

const listByUser = async function (request, response, next) {
	try {
		const favoriteVideos = await new FavoriteVideo().listByUser(
			request.params.user
		);

		const responseData = {
			error: false,
			favoriteVideos,
		};
		return response.status(200).json(responseData);
	} catch (e) {
		return response.status(500).json({ status: 400, message: e.message });
	}
};

const destroy = async function (request, response, next) {
	try {
		await new FavoriteVideo().delete(request.params._id);

		return response.status(200).json({
			error: false,
			message: "Video favorito eliminado correctamente",
		});
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

module.exports.create = create;
module.exports.listByUser = listByUser;
module.exports.destroy = destroy;
