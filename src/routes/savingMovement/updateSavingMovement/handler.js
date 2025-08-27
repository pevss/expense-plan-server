const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");
const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { update } = require("../../../services/savingMovement");

const updateSavingMovement = async function (req, res) {
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

	const { userId, savingId, movementId, movementTypeId } = req;

	const updatedSavingMovement = await update({
		userId,
		savingId,
		movementId,
		movementTypeId,
		amount,
	});

	return res.status(200).send(updatedSavingMovement);
};

module.exports = updateSavingMovement;
