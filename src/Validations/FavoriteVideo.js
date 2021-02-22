const Joi = require("joi");

const fieldsMessages = {
	user: {
		"string.base": "El usuario es obligatorio ",
		"string.empty": "El usuario es obligatorio",
		"any.required": "El usuario es obligatorio",
	},
	video: {
		"string.base": "El video es obligatorio ",
		"string.empty": "El video es obligatorio",
		"any.required": "El video es obligatorio",
	},
};

const createValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().required().messages(fieldsMessages.user),
		video: Joi.string().required().messages(fieldsMessages.video),
	});
	return schema.validate(data, { abortEarly: false });
};

module.exports.createValidation = createValidation;
