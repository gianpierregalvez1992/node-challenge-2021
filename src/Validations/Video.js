const Joi = require("joi");

const fieldsMessages = {
	user: {
		"string.base": "El usuario es obligatorio ",
		"string.empty": "El usuario es obligatorio",
		"any.required": "El usuario es obligatorio",
	},
	title: {
		"string.base": "El título debe ser un texto",
		"string.empty": "El título no puede ser vacio",
		"string.min": `El título debe tener al menos {#limit} caractéres`,
		"any.required": "El título es obligatorio",
	},
	description: {
		"string.base": "La descripción debe ser un texto",
		"string.empty": "La descripción no puede estar vacia",
		"any.required": "La descripción es obligatoria",
	},
	youtube_url: {
		"string.base": "El url debe ser un texto",
		"string.empty": "El url no puede ser vacio",
		"any.required": "El url es obligatorio",
	},
	image: {
		"string.base": "La imagen debe ser un texto",
		"string.empty": "La imagen no puede estar vacia",
		"any.required": "La imagen es obligatoria",
	},
};

const createValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().required().messages(fieldsMessages.user),
		title: Joi.string().min(6).required().messages(fieldsMessages.title),
		description: Joi.string().required().messages(fieldsMessages.description),
		youtube_url: Joi.string().required().messages(fieldsMessages.youtube_url),
		image: Joi.string().required().messages(fieldsMessages.image),
	});
	return schema.validate(data, { abortEarly: false });
};

const updateValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().messages(fieldsMessages.user),
		title: Joi.string().min(6).messages(fieldsMessages.title),
		description: Joi.string().messages(fieldsMessages.description),
		youtube_url: Joi.string().messages(fieldsMessages.youtube_url),
		image: Joi.string().messages(fieldsMessages.image),
	});
	return schema.validate(data, { abortEarly: false });
};

module.exports.createValidation = createValidation;
module.exports.updateValidation = updateValidation;
