const doesUserMovementBelongToSaving = require("../utils/doesUserMovementBelongToSaving");

const userMovementBelongToToSavingPreHandler = async function (req, res) {
	const { userId, movementId, savingId } = req;

	const { check: movementBelongToSaving, error } =
		await doesUserMovementBelongToSaving(userId, movementId, savingId);

	if (!movementBelongToSaving) {
		return res.status(error.status).send(error);
	}
};

module.exports = userMovementBelongToToSavingPreHandler;
