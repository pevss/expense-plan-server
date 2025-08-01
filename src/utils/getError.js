const prisma = require("../plugins/prisma");

const getError = async function (code) {
	const {
		code: errorCode,
		message,
		httpStatus,
	} = (await prisma.error.findFirst({ where: { code } })) ||
	(await prisma.error.findFirst({
		where: { code: "ERR_ERR_NOT_FOUND" },
	}));

	return {
		error: errorCode,
		errorMessage: message,
		status: httpStatus,
	};
};

module.exports = getError;
