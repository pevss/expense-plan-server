const paramsValidatorSchema = require("./requestValidators/paramsSchema");
const bodyValidatorSchema = require("./requestValidators/bodySchema");

const { update } = require("../../../services/movementType");
const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const updateUserMovementType = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { description, color } = {},
		error: invalidBodyError,
	} = await validadeRequestSchema(bodyValidatorSchema, req.body, res);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, movementCategoryId, movementTypeId } = req;

	const updatedMovementType = await update({
		id: movementTypeId,
		userId,
		color,
		description,
		movementCategoryId,
		isUpdatedBySystem: 0,
	});

	return res.status(200).send(updatedMovementType);
};

module.exports = updateUserMovementType;
