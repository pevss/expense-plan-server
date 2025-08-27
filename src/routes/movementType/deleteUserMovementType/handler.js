const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const { softDelete, get } = require("../../../services/movementType");
const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const deleteUserMovementType = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId, movementTypeId } = req;

	await softDelete(movementTypeId, userId, 0);

	const remainingUserMovementTypes = await get(userId);

	return res.status(200).send(remainingUserMovementTypes);
};

module.exports = deleteUserMovementType;
