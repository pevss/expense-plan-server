const { errorSchema } = require("../../../config");

const schema = {
	description: "Gets all user's movement per month / year",
	tags: ["Movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	querystring: {
		type: "object",
		required: ["month", "year"],
		properties: {
			month: { type: "number", maximum: 11 },
			year: { type: "number", minimum: 1900, maximum: 2999 },
		},
	},
	response: {
		200: {
			description: "User movements",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "number" },
					movementTypeId: { type: "number" },
					date: { type: "string", format: "date" },
					amount: { type: "number" },
					description: { type: "string" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
