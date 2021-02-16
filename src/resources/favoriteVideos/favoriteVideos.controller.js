const FavoriteVideosService = require("./favoriteVideos.service");
const { storeValidation } = require("./favoriteVideos.validations");

exports.store = async function (request, response, next) {
	const { error } = await storeValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
		};
		return response.status(422).send(error_response);
	}

	try {
		await FavoriteVideosService.store(request.body);

		return response
			.status(200)
			.json({ error: false, message: "Video favorito agregado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

exports.listByUser = async function (request, response, next) {
	try {
		const favoriteVideos = await FavoriteVideosService.listByUser(
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

exports.delete = async function (request, response, next) {
	try {
		await FavoriteVideosService.delete(request.params._id);

		return response.status(200).json({
			error: false,
			message: "Video favorito eliminado correctamente",
		});
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};
