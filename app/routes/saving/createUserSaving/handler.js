const paramsSchema = require("./requestValidators/paramsSchema");
const bodySchema = require("./requestValidators/bodySchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");

const { create } = require("../../../services/saving");

const createUserSaving = async function (req, res) {
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

	const { userId } = req;

	const createdSaving = await create({
		userId,
		description,
	});

	return res.status(200).send(createdSaving);
};

module.exports = createUserSaving;
