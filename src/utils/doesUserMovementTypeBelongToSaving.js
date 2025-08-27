const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementTypeBelongToSaving = async function (
	userId,
	movementTypeId,
	savingId
) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const { depositMovementTypeId, withdrawalMovementTypeId } =
		await prisma.saving.findFirst({
			where: {
				userId,
				id: savingId,
				isDeleted: 0,
			},
		});

	const doesMovementTypeBelongsToSaving = !![
		depositMovementTypeId,
		withdrawalMovementTypeId,
	].find((id) => id === movementTypeId);

	if (!doesMovementTypeBelongsToSaving) {
		existenceStatus.check = false;
		existenceStatus.error = await getError("ERR_INVALID_MOVEMENT_TYPE");
	}

	return existenceStatus;
};

module.exports = doesUserMovementTypeBelongToSaving;
