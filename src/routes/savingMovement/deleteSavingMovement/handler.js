const paramsSchema = require("./requestValidators/paramsSchema");
const querySchema = require("./requestValidators/querySchema");

const {
	softDelete,
	getPerSaving,
} = require("../../../services/savingMovement");
const validateRequestSchema = require("../../../utils/validateRequestSchema");

const deleteSavingMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { isValid: isQueryValid, error: invalidQueryError } =
		await validateRequestSchema(querySchema, req.query);

	if (!isQueryValid) {
		return res.status(invalidQueryError.status).send(invalidQueryError);
	}

	const { userId, savingId, movementId } = req;

	await softDelete(userId, savingId, movementId);

	const remainingSavingMovements = await getPerSaving(userId, savingId);

	return res.status(200).send(remainingSavingMovements);
};

module.exports = deleteSavingMovement;
