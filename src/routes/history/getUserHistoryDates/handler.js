const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const historyActions = require("../../../services/history");

const validadeRequestSchema = require("../../../utils/validateRequestSchema");

const getUserHistoryDates = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validadeRequestSchema(paramsValidatorSchema, req.params, res);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId } = req;

	const historyDates = await historyActions.get(userId);

	res.status(200).send(historyDates);
};

module.exports = getUserHistoryDates;
