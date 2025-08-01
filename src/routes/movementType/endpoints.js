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
		schema: createUserMovementTypeSchema,
		handler: createUserMovementTypeHandler,
	});

	fastify.get("/:token", {
		schema: getAllUserMovementTypesSchema,
		handler: getAllUserMovementTypesHandler,
	});

	fastify.patch("/:token", {
		schema: updateUserMovementTypeSchema,
		handler: updateUserMovementTypeHandler,
	});

	fastify.delete("/:token/:movementTypeId", {
		schema: deleteUserMovementTypeSchema,
		handler: deleteUserMovementTypesHandler,
	});
};

module.exports = endpoins;
