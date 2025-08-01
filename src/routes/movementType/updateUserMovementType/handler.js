const paramsValidatorSchema = require("./requestValidators/paramsSchema");
const bodyValidatorSchema = require("./requestValidators/bodySchema");

const { update } = require("../../../services/movementType");
const doesMovementCategoryExist = require("../../../utils/doesMovementCategoryExist");
const doesUserMovementTypeExist = require("../../../utils/doesUserMovementTypeExist");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");

const updateUserMovementType = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);
	const { id, movementCategoryId, description, color } =
		await validadeRequestSchema(bodyValidatorSchema, req.body, res);

	await doesMovementCategoryExist(movementCategoryId, res);
	await doesUserMovementTypeExist(userId, id, res);

	const { userId } = await getUserIdFromToken(token, res);

	const updatedMovementType = await update({
		id,
		userId,
		color,
		description,
		movementCategoryId,
		isUpdatedBySystem: 0,
	});

	res.status(200).send(updatedMovementType);
};

module.exports = updateUserMovementType;
