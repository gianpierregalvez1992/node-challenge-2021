const Joi = require("joi");

const storeValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().required().messages({
			"string.base": `El usuario es obligatorio `,
			"string.empty": `El usuario es obligatorio`,
			"any.required": `El usuario es obligatorio`,
		}),
		video: Joi.string().required().messages({
			"string.base": `El video es obligatorio `,
			"string.empty": `El video es obligatorio`,
			"any.required": `El video es obligatorio`,
		}),
	});
	return schema.validate(data, { abortEarly: false });
};

module.exports.storeValidation = storeValidation;
