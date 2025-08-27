const { update } = require("../../../services/monthlyMovements");
const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const bodySchema = require("./requestValidators/bodySchema");
const paramsSchema = require("./requestValidators/paramsSchema");

const updateUserMonthlyMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsSchema, req.params, res);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { amount, description, color } = {},
		error: invalidBodyError,
	} = await validadeRequestSchema(bodySchema, req.body, res);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, monthlyMovementId, movementCategoryId } = req;

	const updatedMonthlyMovement = await update({
		id: monthlyMovementId,
		userId,
		movementCategoryId,
		amount,
		description,
		color,
	});

	return res.status(200).send(updatedMonthlyMovement);
};

module.exports = updateUserMonthlyMovement;
