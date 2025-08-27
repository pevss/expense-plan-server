const movementCategoryExistsPreHandler = require("../../hooks/movementCategoryExistsPreHandler");
const userMovementTypeExistsPreHandler = require("../../hooks/userMovementTypeExistsPreHandler");

const createUserMovementTypeSchema = require("./createUserMovementType/documentationSchema");
const createUserMovementTypeHandler = require("./createUserMovementType/handler");

const getAllUserMovementTypesSchema = require("./getAllUserMovementTypes/documentationSchema");
const getAllUserMovementTypesHandler = require("./getAllUserMovementTypes/handler");

const updateUserMovementTypeSchema = require("./updateUserMovementType/documentationSchema");
const updateUserMovementTypeHandler = require("./updateUserMovementType/handler");

const deleteUserMovementTypeSchema = require("./deleteUserMovementType/documentationSchema");
const deleteUserMovementTypesHandler = require("./deleteUserMovementType/handler");

const endpoins = function (fastify, _) {
	fastify.put("/:token", {
		preHandler: [movementCategoryExistsPreHandler],
		schema: createUserMovementTypeSchema,
		handler: createUserMovementTypeHandler,
	});

	fastify.get("/:token", {
		schema: getAllUserMovementTypesSchema,
		handler: getAllUserMovementTypesHandler,
	});

	fastify.patch("/:token", {
		preHandler: [
			movementCategoryExistsPreHandler,
			userMovementTypeExistsPreHandler,
		],
		schema: updateUserMovementTypeSchema,
		handler: updateUserMovementTypeHandler,
	});

	fastify.delete("/:token/:movementTypeId", {
		preHandler: [userMovementTypeExistsPreHandler],
		schema: deleteUserMovementTypeSchema,
		handler: deleteUserMovementTypesHandler,
	});
};

module.exports = endpoins;
