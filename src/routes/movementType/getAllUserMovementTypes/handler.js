const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const { get } = require("../../../services/movementType");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");
const validadeRequestSchema = require("../../../utils/validadeRequestSchema");

const getAllUserMovementTypes = async function (req, res) {
	const { token } = validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);

	const { userId } = await getUserIdFromToken(token, res);

	const userMovementTypes = await get(userId);

	res.status(200).send(userMovementTypes);
};

module.exports = getAllUserMovementTypes;
