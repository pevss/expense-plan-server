const doesUserMovementTypeBelongToSaving = require("../utils/doesUserMovementTypeBelongToSaving");

const userMovementTypeBelongToSavingPreHandler = async function (req, res) {
	const { userId, savingId, movementTypeId } = req;

	const {
		check: doesUserMovementTypeBelongToSavingcheck,
		error: doesUserMovementTypeBelongToSavingError,
	} = await doesUserMovementTypeBelongToSaving(
		userId,
		movementTypeId,
		savingId
	);

	if (!doesUserMovementTypeBelongToSavingcheck) {
		return res
			.status(doesUserMovementTypeBelongToSavingError.status)
			.send(doesUserMovementTypeBelongToSavingError);
	}
};

module.exports = userMovementTypeBelongToSavingPreHandler;
