const userMovementTypeExistsPreHandler = require("../../hooks/userMovementTypeExistsPreHandler");
const userMovementExistsPreHandler = require("../../hooks/userMovementExistsPreHandler");
const isUserMovementInRangePreHandler = require("../../hooks/isUserMovementInRangePreHandler");

const createUserMovementHandler = require("./createUserMovement/handler");
const createUserMovementSchema = require("./createUserMovement/documentationSchema");

const getUserMovementsByMonthHandler = require("./getUserMovementsByMonth/handler");
const getUserMovementsByMonthSchema = require("./getUserMovementsByMonth/documentationSchema");

const updateUserMovementHandler = require("./updateUserMovement/handler");
const updateUserMovementSchema = require("./updateUserMovement/documentationSchema");

const deleteUserMovementHandler = require("./deleteUserMovement/handler");
const deleteUserMovementSchema = require("./deleteUserMovement/documentationSchema");

const endpoints = async function (fastify, _) {
	fastify.put("/:token", {
		preHandler: [userMovementTypeExistsPreHandler],
		schema: createUserMovementSchema,
		handler: createUserMovementHandler,
	});

	fastify.get("/:token", {
		schema: getUserMovementsByMonthSchema,
		handler: getUserMovementsByMonthHandler,
	});

	fastify.patch("/:token", {
		preHandler: [
			userMovementTypeExistsPreHandler,
			userMovementExistsPreHandler,
			isUserMovementInRangePreHandler,
		],
		schema: updateUserMovementSchema,
		handler: updateUserMovementHandler,
	});

	fastify.delete("/:token/:movementId", {
		preHandler: [
			userMovementExistsPreHandler,
			isUserMovementInRangePreHandler,
		],
		schema: deleteUserMovementSchema,
		handler: deleteUserMovementHandler,
	});
};

module.exports = endpoints;
