const paramsSchema = require("./requestValidators/paramsSchema");
const querySchema = require("./requestValidators/querySchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { getByDate } = require("../../../services/movement");

const getUserMovementsByMonth = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isQueryValid,
		data: monthYear,
		error: invalidQueryError,
	} = await validateRequestSchema(querySchema, req.query);

	if (!isQueryValid) {
		return res.status(invalidQueryError.status).send(invalidQueryError);
	}

	const { userId } = req;

	const userMovements = await getByDate(userId, monthYear);

	return res.status(200).send(userMovements);
};

module.exports = getUserMovementsByMonth;
