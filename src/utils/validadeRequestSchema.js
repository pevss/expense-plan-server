const getError = require("./getError");

const validadeRequestSchema = async function (schema, data, res) {
	const parsedData = schema.safeParse(data);

	if (!parsedData.success) {
		const errorCode = parsedData.error.errors[0]?.message;

		const error = await getError(errorCode);

		return res.status(error.status).send(error);
	}

	return parsedData.data;
};

module.exports = validadeRequestSchema;
