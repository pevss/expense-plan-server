const paramsValidatorSchema = require("./requestValidators/paramsSchema");
const bodyValidatorSchema = require("./requestValidators/bodySchema");

const { create } = require("../../../services/movementType");
const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const createUserMovementType = async function (req, res) {
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
		return res.status(invalidBodyError).send(invalidBodyError);
	}

	console.table(req);

	const { userId, movementCategoryId } = req;

	const createdMovementType = await create({
		userId,
		movementCategoryId,
		description,
		color,
		isCreatedBySystem: 0,
	});

	return res.status(200).send(createdMovementType);
};

module.exports = createUserMovementType;
