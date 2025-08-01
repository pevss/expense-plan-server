const { update } = require("../../../services/monthlyMovements");
//prettier-ignore
const { update: updateMovementType } = require("../../../services/movementType");
const doesMovementCategoryExist = require("../../../utils/doesMovementCategoryExist");
const getError = require("../../../utils/getError");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");

const bodySchema = require("./requestValidators/bodySchema");
const paramsSchema = require("./requestValidators/paramsSchema");

const updateUserMonthlyMovement = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsSchema,
		req.params,
		res
	);

	const { userId } = await getUserIdFromToken(token);

	const {
		id: monthlyMovementId,
		amount,
		movementCategoryId,
		description,
		color,
	} = await validadeRequestSchema(bodySchema, req.body, res);

	await doesMovementCategoryExist(movementCategoryId, res);

	const updatedMonthlyMovement = await update({
		id: monthlyMovementId,
		userId,
		amount,
		description,
	});

	const updatedMovementType = await updateMovementType({
		id: updatedMonthlyMovement.movementTypeId,
		userId,
		movementCategoryId,
		description,
		color,
		isUpdatedBySystem: true,
	});

	if (updatedMonthlyMovement === null || updatedMovementType === null) {
		const error = await getError("ERR_NOT_FOUND"); //TODO: ERR

		res.status(error.status).send(error);
	}

	res.status(200).send({
		updatedMonthlyMovement,
		updatedMovementType,
	});
};

module.exports = updateUserMonthlyMovement;
