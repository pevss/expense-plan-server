const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const { getUserHistoryDates } = require("../../../services/user");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const getUserHistoryDatesHandler = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params, res);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId } = req;

	const historyDates = await getUserHistoryDates(userId);

	res.status(200).send(historyDates);
};

module.exports = getUserHistoryDatesHandler;
