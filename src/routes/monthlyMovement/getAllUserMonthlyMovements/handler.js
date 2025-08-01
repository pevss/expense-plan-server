const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const monthlyMovementServices = require("../../../services/monthlyMovements");

const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");

const getAllUserMonthlyMovements = async function (req, res) {
	const { token } = validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);

	const { userId } = getUserIdFromToken(token, res);

	const userMonthlyMovements = await monthlyMovementServices.get(userId);

	res.status(200).send(userMonthlyMovements);
};

module.exports = getAllUserMonthlyMovements;
