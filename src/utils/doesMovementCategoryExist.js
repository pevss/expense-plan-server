const prisma = require("../plugins/prisma");

const getError = require("./getError");

const doesMovementCategoryExist = async function (id, res) {
	const selectedMovementCategory = await prisma.movementCategory.findFirst({
		where: { id, userId },
	});

	if (!selectedMovementCategory) {
		const error = await getError("ERR_MOVEMENT_CATEGORY_NOT_FOUND");
		return res.status(error.status).send(error);
	}

	return true;
};

module.exports = doesMovementCategoryExist;
