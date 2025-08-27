const getAllMovementCategoriesSchema = require("./getAllMovementCategories/documentationSchema");
const getAllMovementCategoriesHandler = require("./getAllMovementCategories/handler");

const endpoints = async function (fastify, _) {
	fastify.get("/", {
		schema: getAllMovementCategoriesSchema,
		handler: getAllMovementCategoriesHandler,
	});
};

module.exports = endpoints;
