const Joi = require("joi");

const storeValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().required().messages({
			"string.base": `El usuario es obligatorio `,
			"string.empty": `El usuario es obligatorio`,
			"any.required": `El usuario es obligatorio`,
		}),
		title: Joi.string().min(6).required().messages({
			"string.base": `El título debe ser un texto`,
			"string.empty": `El título no puede ser vacio`,
			"string.min": `El título debe tener al menos {#limit} caractéres`,
			"any.required": `El título es obligatorio`,
		}),
		description: Joi.string().required().messages({
			"string.base": `La descripción debe ser un texto`,
			"string.empty": `La descripción no puede estar vacia`,
			"any.required": `La descripción es obligatoria`,
		}),
		youtube_url: Joi.string().required().messages({
			"string.base": `El url debe ser un texto`,
			"string.empty": `El url no puede ser vacio`,
			"any.required": `El url es obligatorio`,
		}),
		image: Joi.string().required().messages({
			"string.base": `La imagen debe ser un texto`,
			"string.empty": `La imagen no puede estar vacia`,
			"any.required": `La imagen es obligatoria`,
		}),
	});
	return schema.validate(data, { abortEarly: false });
};

const updateValidation = async (data) => {
	const schema = Joi.object({
		_id: Joi.string().required().messages({
			"string.base": `El id es obligatorio `,
			"string.empty": `El id es obligatorio`,
			"any.required": `El id es obligatorio`,
		}),
		user: Joi.string().required().messages({
			"string.base": `El usuario es obligatorio `,
			"string.empty": `El usuario es obligatorio`,
			"any.required": `El usuario es obligatorio`,
		}),
		title: Joi.string().min(6).required().messages({
			"string.base": `El título debe ser un texto`,
			"string.empty": `El título no puede ser vacio`,
			"string.min": `El título debe tener al menos {#limit} caractéres`,
			"any.required": `El título es obligatorio`,
		}),
		description: Joi.string().required().messages({
			"string.base": `La descripción debe ser un texto`,
			"string.empty": `La descripción no puede estar vacia`,
			"any.required": `La descripción es obligatoria`,
		}),
		youtube_url: Joi.string().required().messages({
			"string.base": `El url debe ser un texto`,
			"string.empty": `El url no puede ser vacio`,
			"any.required": `El url es obligatorio`,
		}),
		image: Joi.string().required().messages({
			"string.base": `La imagen debe ser un texto`,
			"string.empty": `La imagen no puede estar vacia`,
			"any.required": `La imagen es obligatoria`,
		}),
	});
	return schema.validate(data, { abortEarly: false });
};

const listByUserValidation = async (data) => {
	const schema = Joi.object({
		user: Joi.string().required().messages({
			"string.base": `El usuario es obligatorio `,
			"string.empty": `El usuario es obligatorio`,
			"any.required": `El usuario es obligatorio`,
		}),
	});
	return schema.validate(data, { abortEarly: false });
};

const deleteValidation = async (data) => {
	const schema = Joi.object({
		_id: Joi.string().required().messages({
			"string.base": `El id es obligatorio `,
			"string.empty": `El id es obligatorio`,
			"any.required": `El id es obligatorio`,
		}),
	});
	return schema.validate(data, { abortEarly: false });
};

module.exports.storeValidation = storeValidation;
module.exports.updateValidation = updateValidation;
module.exports.listByUserValidation = listByUserValidation;
module.exports.deleteValidation = deleteValidation;
