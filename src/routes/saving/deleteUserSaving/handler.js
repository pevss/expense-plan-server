const paramsSchema = require("./requestValidators/paramsSchema");
const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { softDelete, get } = require("../../../services/saving");

const deleteUserSaving = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId, savingId } = req;

	await softDelete(userId, savingId);

	const remainingSavings = await get(userId);

	return res.status(200).send(remainingSavings);
};

module.exports = deleteUserSaving;
