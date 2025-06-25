const prisma = require("../../databaseConnection/prismaClient");
const getError = require("../../helpers/getError");

const route = async function (fastify, _) {
	fastify.get("/", async (_, res) => {
		const movementCategories = await prisma.movementCategory.findMany();

		if (!movementCategories.length) {
			const error = await getError("ERR_MOVEMENT_CATEGORY_NOT_FOUND");

			res.status(error.httpStatus).send({
				error: error.code,
				errorMessage: error.message,
				status: error.httpStatus,
			});
		}

		res.status(200).send(movementCategories);
	});
};

module.exports = route;
