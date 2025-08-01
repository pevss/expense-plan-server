const prisma = require("../plugins/prisma");

const get = async function () {
	const movementCategories = await prisma.movementCategory.findMany();

	return movementCategories;
};

module.exports = { get };
