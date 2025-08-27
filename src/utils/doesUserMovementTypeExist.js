const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementTypeExist = async function (userId, id) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const movementType = await prisma.movementType.findFirst({
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	if (movementType === null) {
		existenceStatus.check = false;
		existenceStatus.error = await getError("ERR_MOVEMENT_TYPE_NOT_FOUND");
	}

	return existenceStatus;
};

module.exports = doesUserMovementTypeExist;
