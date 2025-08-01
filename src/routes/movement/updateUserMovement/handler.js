const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const isUserMovementInCurrentMonth = require("../../../utils/isUserMovementInCurrentMonth");
const doesUserMovementExist = require("../../../utils/doesUserMovementExist");
const getError = require("../../../utils/getError");
const { update } = require("../../../services/movement");

const updateUserMovement = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsSchema,
		req.params,
		res
	);

	const { userId } = await getUserIdFromToken(token, res);

	const { id, movementTypeId, amount, description } =
		await validadeRequestSchema(bodySchema, req.body, res);

	await doesUserMovementExist(userId, id, res);

	const isMovementInRange = await isUserMovementInCurrentMonth(userId, id);

	if (!isMovementInRange) {
		const error = await getError("ERR_MOVEMENT_OUT_OF_RANGE");
		res.status(error.status).send(error);
	}

	const updatedMovement = await update({
		userId,
		id,
		movementTypeId,
		amount,
		description,
	});

	res.status(200).send(updatedMovement);
};

module.exports = updateUserMovement;
