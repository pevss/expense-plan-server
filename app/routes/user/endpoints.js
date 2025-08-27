const getUserHistoryDatesSchema = require("./getUserHistoryDates/documentationSchema");
const getUserHistoryDatesHandler = require("./getUserHistoryDates/handler");

const getUserOverallsSchema = require("./getUserOveralls/documentationSchema");
const getUserOverallsHandler = require("./getUserOveralls/handler");

const endpoints = async function (fastify, _) {
	fastify.get("/history/:token", {
		schema: getUserHistoryDatesSchema,
		handler: getUserHistoryDatesHandler,
	});

	fastify.get("/overalls/:token", {
		schema: getUserOverallsSchema,
		handler: getUserOverallsHandler,
	});
};

module.exports = endpoints;
