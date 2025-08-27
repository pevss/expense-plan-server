const errorSchema = {
	type: "object",
	properties: {
		error: { type: "string" },
		errorMessage: { type: "string" },
		status: { type: "integer" },
	},
};

const routesIgnoredByGlobalHooks = ["/docs", "/movementCategory", "/public"];

module.exports = { errorSchema, routesIgnoredByGlobalHooks };
