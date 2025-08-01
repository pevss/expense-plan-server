const getUserHistoryDatesSchema = require("./getUserHistoryDates/documentationSchema");
const getUserHistoryDatesHandler = require("./getUserHistoryDates/handler");

const endpoints = async function (fastify, _) {
	fastify.get("/:token", {
		schema: getUserHistoryDatesSchema,
		handler: getUserHistoryDatesHandler,
	});
};

module.exports = endpoints;
