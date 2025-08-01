const prisma = require("../plugins/prisma");

const getError = require("./getError");

const getUserIdFromToken = async function (token, res) {
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

	if (user === null) {
		const error = await getError("ERR_UNAUTHORIZED");

		return res.status(error.status).send(error);
	}

	return { userId: user.userId };
};

module.exports = getUserIdFromToken;
