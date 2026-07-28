const bodyValidatorSchema = require("./requestValidators/bodySchema");
const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const { create } = require("../../../services/monthlyMovements");
const {
	getOne: getOneMovementType,
} = require("../../../services/movementType");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const createUserMonthlyMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { amount, description, color } = {},
		error: invalidBodyError,
	} = await validadeRequestSchema(bodyValidatorSchema, req.body, res);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, movementCategoryId } = req;

	const createdMonthlyMovement = await create({
		userId,
		movementCategoryId,
		amount,
		description,
		color,
	});

	const createdMovementType = await getOneMovementType(
		userId,
		createdMonthlyMovement.movementTypeId,
	);

	const responseBody = {
		monthlyMovement: createdMonthlyMovement,
		movementType: createdMovementType,
	};

	// TODO: enviar o monthlymovement criado e o movementtype tambem
	return res.status(200).send(responseBody);
};

module.exports = createUserMonthlyMovement;
