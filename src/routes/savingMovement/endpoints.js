const userSavingExistsPreHandler = require("../../hooks/userSavingExistsPreHandler");
const userMovementTypeExistsPreHandler = require("../../hooks/userMovementTypeExistsPreHandler");
const userMovementTypeBelongToSavingPreHandler = require("../../hooks/userMovementTypeBelongToSavingPreHandler");
const userMovementExistsPreHandler = require("../../hooks/userMovementExistsPreHandler.js");
const userMovementBelongToSavingPreHandler = require("../../hooks/userMovementBelongToSavingPreHandler.js");

const createSavingMovementHandler = require("./createSavingMovement/handler");
const createSavingMovementSchema = require("./createSavingMovement/documentationSchema");

const getSavingMovementsPerSavingHandler = require("./getSavingMovementsPerSaving/handler");
const getSavingMovementsPerSavingSchema = require("./getSavingMovementsPerSaving/documentationSchema");

const updateSavingMovementHandler = require("./updateSavingMovement/handler");
const updateSavingMovementSchema = require("./updateSavingMovement/documentationSchema");

const deleteSavingMovementHandler = require("./deleteSavingMovement/handler");
const deleteSavingMovementSchema = require("./deleteSavingMovement/documentationSchema");

const endpoints = function (fastify, _) {
	fastify.put("/:token", {
		preHandler: [
			userSavingExistsPreHandler,
			userMovementTypeExistsPreHandler,
			userMovementTypeBelongToSavingPreHandler,
		],
		handler: createSavingMovementHandler,
		schema: createSavingMovementSchema,
	});

	fastify.get("/:token/:savingId", {
		preHandler: [userSavingExistsPreHandler],
		handler: getSavingMovementsPerSavingHandler,
		schema: getSavingMovementsPerSavingSchema,
	});

	fastify.patch("/:token", {
		preHandler: [
			userSavingExistsPreHandler,
			userMovementExistsPreHandler,
			userMovementBelongToSavingPreHandler,
			userMovementTypeExistsPreHandler,
			userMovementTypeBelongToSavingPreHandler,
		],
		handler: updateSavingMovementHandler,
		schema: updateSavingMovementSchema,
	});

	fastify.delete("/:token", {
		preHandler: [
			userSavingExistsPreHandler,
			userMovementExistsPreHandler,
			userMovementBelongToSavingPreHandler,
		],
		handler: deleteSavingMovementHandler,
		schema: deleteSavingMovementSchema,
	});
};

module.exports = endpoints;
