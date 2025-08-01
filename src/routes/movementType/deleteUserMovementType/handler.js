const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const { softDelete, get } = require("../../../services/movementType");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getError = require("../../../utils/getError");
const doesUserMovementTypeExist = require("../../../utils/doesUserMovementTypeExist");

const deleteUserMovementType = async function (req, res) {
	const { token, movementTypeId } = await validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);

	const { userId } = await getUserIdFromToken(token, res);

	await doesUserMovementTypeExist(userId, movementTypeId, res);

	await softDelete(movementTypeId, userId);

	const remainingUserMovementTypes = await get(userId);

	res.status(200).send(remainingUserMovementTypes);
};

module.exports = deleteUserMovementType;
