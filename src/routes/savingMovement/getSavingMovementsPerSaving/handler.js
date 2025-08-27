const paramsSchema = require("./requestValidators/paramsSchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { getPerSaving } = require("../../../services/savingMovement");

const getSavingMovementsPerSaving = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId, savingId } = req;

	const savingMovements = await getPerSaving(userId, savingId);

	return res.status(200).send(savingMovements);
};

module.exports = getSavingMovementsPerSaving;
