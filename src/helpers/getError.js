const prisma = require("../databaseConnection/prismaClient");

const getError = async function (code) {
	const {
		code: errorCode,
		message,
		httpStatus,
	} = (await prisma.error.findFirst({ where: { code } })) ||
	(await prisma.error.findFirst({ where: { code: "ERR_ERR_NOT_FOUND" } }));

	return {
		code: errorCode,
		message,
		httpStatus,
	};
};

module.exports = getError;
