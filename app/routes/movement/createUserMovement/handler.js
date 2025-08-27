const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const { create } = require("../../../services/movement");

const createUserMovement = async function (req, res) {
	const { isValid: isParamsValid, error: paramsValidationError } =
		await validadeRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		res.status(paramsValidationError.status).send(paramsValidationError);
	}

	const {
		isValid: isBodyValid,
		data: { description, amount } = {},
		error: bodyValidationError,
	} = await validadeRequestSchema(bodySchema, req.body);

	if (!isBodyValid) {
		res.status(bodyValidationError.status).send(bodyValidationError);
	}

	const { userId, movementTypeId } = req;

	const createdMovement = await create({
		userId,
		movementTypeId,
		description,
		amount,
	});

	res.status(200).send(createdMovement);
};

module.exports = createUserMovement;
