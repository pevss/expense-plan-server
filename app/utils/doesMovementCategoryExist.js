const prisma = require("../plugins/prisma");

const getError = require("./getError");

const doesMovementCategoryExist = async function (id) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const selectedMovementCategory = await prisma.movementCategory.findFirst({
		where: { id },
	});

	if (!selectedMovementCategory) {
		existenceStatus.check = false;
		existenceStatus.error = await getError(
			"ERR_MOVEMENT_CATEGORY_NOT_FOUND"
		);
	}

	return existenceStatus;
};

module.exports = doesMovementCategoryExist;
