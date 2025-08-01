const { errorSchema } = require("../../../config");

const schema = {
	description: "Gets all user monthly movements",
	tags: ["Monthly movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	response: {
		200: {
			description: "User monthly movements",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "integer" },
					movementTypeId: { type: "integer" },
					amount: { type: "number" },
					description: { type: "string" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
