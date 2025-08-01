const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementTypeExist = async function (userId, id, res) {
	const movementType = await prisma.movementType.findFirst({
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	if (movementType === null) {
		const error = await getError("ERR_MOVEMENT_TYPE_NOT_FOUND");

		res.status(error.status).send(error);
	}

	return true;
};

module.exports = doesUserMovementTypeExist;
