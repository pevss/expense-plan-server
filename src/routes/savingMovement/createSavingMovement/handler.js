const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");

const { create } = require("../../../services/savingMovement");

const createSavingMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { amount } = {},
		error: invalidBodyError,
	} = await validateRequestSchema(bodySchema, req.body);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, savingId, movementTypeId } = req;

	const createdSavingMovement = await create({
		userId,
		savingId,
		movementTypeId,
		amount,
	});

	return res.status(200).send(createdSavingMovement);
};

module.exports = createSavingMovement;
