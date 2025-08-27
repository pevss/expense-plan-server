const paramsSchema = require("./requestValidators/paramsSchema");

const validateRequestSchema = require("../../../utils/validateRequestSchema");
const { softDelete, getByDate } = require("../../../services/movement");

const deleteUserMovement = async function (req, res) {
	const { isValid: isParamsValid, error: invalidParamsError } =
		await validateRequestSchema(paramsSchema, req.params);

	if (!isParamsValid) {
		return res.status(invalidParamsError.status).send(invalidParamsError);
	}

	const { userId, movementId } = req;
	const currentDate = new Date();
	const currentMonthYear = {
		month: currentDate.getMonth(),
		year: currentDate.getFullYear(),
	};

	await softDelete(userId, movementId);

	const remainingMovements = await getByDate(userId, currentMonthYear);

	return res.status(200).send(remainingMovements);
};

module.exports = deleteUserMovement;
