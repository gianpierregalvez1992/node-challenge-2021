const VideosService = require("./videos.service");
const {
	storeValidation,
	updateValidation,
	deleteValidation,
	listByUserValidation,
} = require("./videos.validations");

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
		await VideosService.store(request.body);

		return response
			.status(200)
			.json({ error: false, message: "Video agregado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

exports.update = async function (request, response, next) {
	const { error } = await updateValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
			data: request.body,
		};
		return response.status(422).send(error_response);
	}

	try {
		await VideosService.update(request.body);

		return response
			.status(200)
			.json({ error: false, message: "Video actualizado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

exports.listByUser = async function (request, response, next) {
	const { error } = await listByUserValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
		};
		return response.status(422).send(error_response);
	}

	try {
		const videos = await VideosService.listByUser(request.body.user);

		const responseData = {
			error: false,
			videos,
		};
		return response.status(200).json(responseData);
	} catch (e) {
		return response.status(500).json({ status: 400, message: e.message });
	}
};

exports.delete = async function (request, response, next) {
	const { error } = await deleteValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
		};
		return response.status(422).send(error_response);
	}

	try {
		await VideosService.delete(request.body);

		return response
			.status(200)
			.json({ error: false, message: "Video eliminado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};
