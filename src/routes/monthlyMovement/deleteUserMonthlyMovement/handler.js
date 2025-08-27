const paramsSchema = require("./requestValidators/paramsSchema");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const { softDelete, get } = require("../../../services/monthlyMovements");

const deleteUserMonthlyMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsSchema, req.params, res);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId, monthlyMovementId } = req;

	await softDelete(monthlyMovementId, userId);

	const remainingUserMonthlyMovements = await get(userId);

	return res.status(200).send(remainingUserMonthlyMovements);
};

module.exports = deleteUserMonthlyMovement;
