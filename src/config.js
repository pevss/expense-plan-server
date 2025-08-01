const errorSchema = {
	type: "object",
	properties: {
		error: { type: "string" },
		errorMessage: { type: "string" },
		status: { type: "integer" },
	},
};

module.exports = { errorSchema };
