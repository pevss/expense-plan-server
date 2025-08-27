const paramsSchema = require("./requestValidators/paramsSchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");

const { getUserOveralls } = require("../../../services/user");

const getUserOverallsHandler = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId } = req;

	const userOveralls = await getUserOveralls(userId);

	return res.status(200).send(userOveralls);
};

module.exports = getUserOverallsHandler;
