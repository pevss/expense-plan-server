const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { update } = require("../../../services/saving");

const updateUserSaving = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const {
		isValid: isBodyValid,
		data: { description } = {},
		error: invalidBodyError,
	} = await validateRequestSchema(bodySchema, req.body);

	if (!isBodyValid) {
		return res.status(invalidBodyError.status).send(invalidBodyError);
	}

	const { userId, savingId } = req;

	const updatedSaving = await update({
		userId,
		savingId,
		description,
	});

	return res.status(200).send(updatedSaving);
};

module.exports = updateUserSaving;
