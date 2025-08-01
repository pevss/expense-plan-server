const paramsValidatorSchema = require("./requestValidators/paramsSchema");
const bodyValidatorSchema = require("./requestValidators/bodySchema");

const { create } = require("../../../services/movementType");
const doesMovementCategoryExist = require("../../../utils/doesMovementCategoryExist");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");

const createUserMovementType = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);
	const { movementCategoryId, description, color } =
		await validadeRequestSchema(bodyValidatorSchema, req.body, res);

	const { userId } = await getUserIdFromToken(token, res);

	await doesMovementCategoryExist(movementCategoryId, res);

	const createdMovementType = await create({
		userId,
		movementCategoryId,
		description,
		color,
		isCreatedBySystem: 0,
	});

	res.status(200).send(createdMovementType);
};

module.exports = createUserMovementType;
