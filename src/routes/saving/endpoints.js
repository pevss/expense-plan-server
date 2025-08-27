const userSavingExistsPreHandler = require("../../hooks/userSavingExistsPreHandler");

const createUserSavingHandler = require("./createUserSaving/handler");
const createUserSavingSchema = require("./createUserSaving/documentationSchema");

const getAllUserSavingsHandler = require("./getAllUserSavings/handler");
const getAllUserSavingsSchema = require("./getAllUserSavings/documentationSchema");

const updateUserSavingHandler = require("./updateUserSaving/handler");
const updateUserSavingSchema = require("./updateUserSaving/documentationSchema");

const deleteUserSavingHandler = require("./deleteUserSaving/handler");
const deleteUserSavingSchema = require("./deleteUserSaving/documentationSchema");

const endpoints = function (fastify, _) {
	fastify.put("/:token", {
		handler: createUserSavingHandler,
		schema: createUserSavingSchema,
	});

	fastify.get("/:token", {
		handler: getAllUserSavingsHandler,
		schema: getAllUserSavingsSchema,
	});

	fastify.patch("/:token", {
		preHandler: [userSavingExistsPreHandler],
		handler: updateUserSavingHandler,
		schema: updateUserSavingSchema,
	});

	fastify.delete("/:token/:savingId", {
		preHandler: [userSavingExistsPreHandler],
		handler: deleteUserSavingHandler,
		schema: deleteUserSavingSchema,
	});
};

module.exports = endpoints;
