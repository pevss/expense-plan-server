const paramsValidatorSchema = require("./requestValidators/paramsSchema");

const historyActions = require("../../../services/history");

const validadeRequestSchema = require("../../../utils/validadeRequestSchema");
const getUserIdFromToken = require("../../../utils/getUserIdFromToken");

const getUserHistoryDates = async function (req, res) {
	const { token } = await validadeRequestSchema(
		paramsValidatorSchema,
		req.params,
		res
	);

	const { userId } = await getUserIdFromToken(token, res);

	const historyDates = await historyActions.get(userId);

	res.status(200).send(historyDates);
};

module.exports = getUserHistoryDates;
