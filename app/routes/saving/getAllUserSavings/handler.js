const { get } = require("../../../services/saving");
const validateRequestSchema = require("../../../utils/validateRequestSchema");
const paramsSchema = require("./requestValidators/paramsSchema");

const getAllUserSavings = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId } = req;

	const userSavings = await get(userId);

	return res.status(200).send(userSavings);
};

module.exports = getAllUserSavings;
