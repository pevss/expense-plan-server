const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserMonthlyMovementExist = async function (
	userId,
	monthlyMovementId
) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const monthlyMovement = await prisma.monthlyMovement.findFirst({
		where: {
			userId,
			id: monthlyMovementId,
		},
	});

	if (!monthlyMovement) {
		existenceStatus.check = false;
		existenceStatus.error = await getError(
			"ERR_MONTHLY_MOVEMENT_NOT_FOUND"
		);
	}

	return existenceStatus;
};

module.exports = doesUserMonthlyMovementExist;
