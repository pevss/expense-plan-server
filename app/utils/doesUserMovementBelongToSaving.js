const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementBelongToSaving = async function (
	userId,
	movementId,
	savingId
) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const movement = await prisma.savingMovement.findFirst({
		where: {
			saving: {
				id: savingId,
				userId,
			},
			movement: {
				id: movementId,
				userId,
			},
		},
	});

	if (!movement) {
		existenceStatus.check = false;
		existenceStatus.error = await getError("ERR_INVALID_MOVEMENT");
	}

	return existenceStatus;
};

module.exports = doesUserMovementBelongToSaving;
