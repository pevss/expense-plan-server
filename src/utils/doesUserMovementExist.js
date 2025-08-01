const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMovementExist = async function (userId, id, res) {
	const userMovement = await prisma.movement.findFirst({
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	if (userMovement === null) {
		const error = await getError("ERR_MOVEMENT_NOT_FOUND");

		res.status(error.status).send(error);
	}

	return true;
};

module.exports = doesUserMovementExist;
