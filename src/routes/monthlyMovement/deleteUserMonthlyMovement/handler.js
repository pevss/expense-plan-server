const paramsSchema = require("./requestValidators/paramsSchema");

const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const {
	softDelete,
	getOne,
	get,
} = require("../../../services/monthlyMovements");
const {
	softDelete: deleteMovementType,
} = require("../../../services/movementType");
const getError = require("../../../utils/getError");

const deleteUserMonthlyMovement = async function (req, res) {
	const { token, monthlyMovementId } = validadeRequestSchema(
		paramsSchema,
		req.params,
		res
	);

	const { userId } = getUserIdFromToken(token, res);

	const { movementTypeId } = await getOne(userId, monthlyMovementId);

	const deletedMovementType = await deleteMovementType(
		movementTypeId,
		userId
	);

	const deletedMonthlyMovement = await softDelete(monthlyMovementId, userId);

	if (deletedMovementType === null || deletedMonthlyMovement === null) {
		const error = await getError("ERR_ERR_NOT_FOUND"); //TODO: ERR

		res.status(error.status).send(error);
	}

	const remainingUserMonthlyMovements = await get(userId);

	return remainingUserMonthlyMovements;
};

module.exports = deleteUserMonthlyMovement;
