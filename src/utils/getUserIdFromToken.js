const prisma = require("../plugins/prisma");

const getError = require("./getError");

const getUserIdFromToken = async function (token) {
	const user = await prisma.auth.findFirst({
		where: {
			token,
			isActive: 1,
			user: {
				isDeleted: 0,
			},
		},
		include: {
			user: true,
		},
	});

	const existenceStatus = {
		isUserAuthenticated: true,
		userId: user?.user?.id,
		error: null,
	};

	if (user === null) {
		existenceStatus.isUserAuthenticated = false;
		existenceStatus.error = await getError("ERR_UNAUTHORIZED");
	}

	return existenceStatus;
};

module.exports = getUserIdFromToken;
