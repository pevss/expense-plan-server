const userSavingExistsPreHandler = require("../../hooks/userSavingExistsPreHandler.js");
const userMovementTypeExistsPreHandler = require("../../hooks/userMovementTypeExistsPreHandler.js");
const userMovementTypeBelongToSavingPreHandler = require("../../hooks/userMovementTypeBelongToSavingPreHandler.js");
const userMovementExistsPreHandler = require("../../hooks/userMovementExistsPreHandler.js");
const userMovementBelongToSavingPreHandler = require("../../hooks/userMovementBelongToSavingPreHandler.js");

const createSavingMovementHandler = require("./createSavingMovement/handler.js");
const createSavingMovementSchema = require("./createSavingMovement/documentationSchema.js");

const getSavingMovementsPerSavingHandler = require("./getSavingMovementsPerSaving/handler.js");
const getSavingMovementsPerSavingSchema = require("./getSavingMovementsPerSaving/documentationSchema.js");

const updateSavingMovementHandler = require("./updateSavingMovement/handler.js");
const updateSavingMovementSchema = require("./updateSavingMovement/documentationSchema.js");

const deleteSavingMovementHandler = require("./deleteSavingMovement/handler.js");
const deleteSavingMovementSchema = require("./deleteSavingMovement/documentationSchema.js");

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
