const movementCategoryExistsPreHandler = require("../../hooks/movementCategoryExistsPreHandler");
const userMonthlyMovementExistsPreHandler = require("../../hooks/userMonthlyMovementExistsPreHandler");

const createUserMonthlyMovementSchema = require("./createUserMonthlyMovement/documentationSchema");
const createUserMonthlyMovementHandler = require("./createUserMonthlyMovement/handler");

const getAllUserMonthlyMovementsSchema = require("./getAllUserMonthlyMovements/documentationSchema");
const getAllUserMonthlyMovementsHandler = require("./getAllUserMonthlyMovements/handler");

const updateUserMonthlyMovementSchema = require("./updateUserMonthlyMovement/documentationSchema");
const updateUserMonthlyMovementHandler = require("./updateUserMonthlyMovement/handler");

const deleteUserMonthlyMovementSchema = require("./deleteUserMonthlyMovement/documentationSchema");
const deleteUserMonthlyMovementHandler = require("./deleteUserMonthlyMovement/handler");

const endpoints = function (fastify, _) {
	fastify.put("/:token", {
		preHandler: [movementCategoryExistsPreHandler],
		schema: createUserMonthlyMovementSchema,
		handler: createUserMonthlyMovementHandler,
	});

	fastify.get("/:token", {
		schema: getAllUserMonthlyMovementsSchema,
		handler: getAllUserMonthlyMovementsHandler,
	});

	fastify.patch("/:token", {
		preHandler: [
			userMonthlyMovementExistsPreHandler,
			movementCategoryExistsPreHandler,
		],
		schema: updateUserMonthlyMovementSchema,
		handler: updateUserMonthlyMovementHandler,
	});

	fastify.delete("/:token/:monthlyMovementId", {
		preHandler: [userMonthlyMovementExistsPreHandler],
		schema: deleteUserMonthlyMovementSchema,
		handler: deleteUserMonthlyMovementHandler,
	});
};

module.exports = endpoints;
