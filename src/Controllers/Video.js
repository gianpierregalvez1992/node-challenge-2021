const Video = require("../Models/Video");
const { createValidation, updateValidation } = require("../Validations/Video");

const create = async function (request, response, next) {
	const { error } = await createValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
		};
		return response.status(422).json(error_response);
	}

	try {
		const video = await new Video().create(request.body);

		return response.status(200).json({
			error: false,
			message: "Video agregado correctamente",
			data: {
				video,
			},
		});
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

const update = async function (request, response, next) {
	const { error } = await updateValidation(request.body);
	if (error) {
		let error_response = {
			error: true,
			details: error.details,
		};
		return response.status(422).send(error_response);
	}

	try {
		await new Video().update(request.params._id, request.body);

		return response
			.status(200)
			.json({ error: false, message: "Video actualizado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

const listByUser = async function (request, response, next) {
	try {
		const videos = await new Video().listByUser(request.params.user);

		const responseData = {
			error: false,
			videos,
		};
		return response.status(200).json(responseData);
	} catch (e) {
		return response.status(500).json({ status: 400, message: e.message });
	}
};

const destroy = async function (request, response, next) {
	try {
		await new Video().delete(request.params._id);

		return response
			.status(200)
			.json({ error: false, message: "Video eliminado correctamente" });
	} catch (e) {
		return response.status(400).json({ status: 400, message: e.message });
	}
};

module.exports.create = create;
module.exports.update = update;
module.exports.listByUser = listByUser;
module.exports.destroy = destroy;
