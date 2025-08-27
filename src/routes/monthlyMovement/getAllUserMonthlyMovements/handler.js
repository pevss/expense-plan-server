const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const monthlyMovementServices = require("../../../services/monthlyMovements");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const getAllUserMonthlyMovements = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params, res);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId } = req;

	const userMonthlyMovements = await monthlyMovementServices.get(userId);

	return res.status(200).send(userMonthlyMovements);
};

module.exports = getAllUserMonthlyMovements;
