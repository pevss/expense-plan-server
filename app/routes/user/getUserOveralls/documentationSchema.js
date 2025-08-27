const { errorSchema } = require("../../../config");

const schema = {
	description: "Returns user's overalls",
	tags: ["User"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	response: {
		200: {
			description: "User overalls",
			type: "object",
			properties: {
				totalDeposited: { type: "number" },
				totalWithdrew: { type: "number" },
				total: { type: "number" },
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
