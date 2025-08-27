const prisma = require("../plugins/prisma");
const getError = require("./getError");

const doesUserSavingExist = async function (userId, id) {
	const existenceStatus = {
		check: true,
		error: null,
	};

	const userSaving = await prisma.saving.findFirst({
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	if (userSaving === null) {
		existenceStatus.check = false;
		existenceStatus.error = await getError("ERR_SAVING_NOT_FOUND");
	}

	return existenceStatus;
};

module.exports = doesUserSavingExist;
