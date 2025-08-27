const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");
const { update } = require("../../../services/movement");

const updateUserMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsSchema, req.params, res);

	if (!isParamsValid) {
		res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { amount, description } = {},
		error: invalidBodyError,
	} = await validadeRequestSchema(bodySchema, req.body, res);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, movementTypeId, movementId } = req;

	const updatedMovement = await update({
		userId,
		id: movementId,
		movementTypeId,
		amount,
		description,
	});

	res.status(200).send(updatedMovement);
};

module.exports = updateUserMovement;
