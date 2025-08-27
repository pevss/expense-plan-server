const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementExist = async function (userId, id) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const userMovement = await prisma.movement.findFirst({
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	if (userMovement === null) {
		existenceStatus.check = false;
		existenceStatus.error = await getError("ERR_MOVEMENT_NOT_FOUND");
	}

	return existenceStatus;
};

module.exports = doesUserMovementExist;
