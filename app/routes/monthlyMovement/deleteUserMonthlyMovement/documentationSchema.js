const { errorSchema } = require("../../../config");

const schema = {
	description: "Deletes an user monthly movement",
	tags: ["Monthly movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
			monthlyMovementId: { type: "number" },
		},
	},
	response: {
		200: {
			description: "Remaining user monthly movements",
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
