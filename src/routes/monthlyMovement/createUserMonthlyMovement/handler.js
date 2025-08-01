const bodyValidatorSchema = require("./requestValidators/bodySchema");
const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const monthlyMovementServices = require("../../../services/monthlyMovements");
const movementTypeServices = require("../../../services/movementType");

const doesMovementCategoryExist = require("../../../utils/doesMovementCategoryExist");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");

const createUserMonthlyMovement = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);

	const { amount, movementCategoryId, description, color } =
		await validadeRequestSchema(bodyValidatorSchema, req.body, res);

	const { userId } = await getUserIdFromToken(token, res);

	await doesMovementCategoryExist(movementCategoryId, res);

	const monthlyMovementMovementTypeData = {
		userId,
		movementCategoryId,
		description,
		color,
		isCreatedBySystem: 1,
	};

	const createdMovementType = await movementTypeServices.create(
		monthlyMovementMovementTypeData
	);

	const monthlyMovementData = {
		userId,
		movementTypeId: createdMovementType.id,
		amount,
		description,
	};

	const createdMonthlyMovement = await monthlyMovementServices.create(
		monthlyMovementData
	);

	res.status(200).send({
		createdMonthlyMovement,
		createdMovementType,
	});
};

module.exports = createUserMonthlyMovement;
