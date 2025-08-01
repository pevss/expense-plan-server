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
		schema: createUserMonthlyMovementSchema,
		handler: createUserMonthlyMovementHandler,
	});

	fastify.get("/:token", {
		schema: getAllUserMonthlyMovementsSchema,
		handler: getAllUserMonthlyMovementsHandler,
	});

	fastify.patch("/:token", {
		schema: updateUserMonthlyMovementSchema,
		handler: updateUserMonthlyMovementHandler,
	});

	fastify.delete("/:token/:monthlyMovementId", {
		schema: deleteUserMonthlyMovementSchema,
		handler: deleteUserMonthlyMovementHandler,
	});
};

module.exports = endpoints;
