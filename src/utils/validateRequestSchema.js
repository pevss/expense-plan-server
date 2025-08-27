const getError = require("./getError");

const validateRequestSchema = async function (schema, data) {
	const validation = {
		isValid: true,
		data: null,
		error: null,
	};

	const parsedData = schema.safeParse(data);

	if (!parsedData.success) {
		const errorCode = parsedData.error.errors[0]?.message;

		validation.isValid = false;
		validation.error = await getError(errorCode);
	}

	validation.data = parsedData.data;

	return validation;
};

module.exports = validateRequestSchema;
