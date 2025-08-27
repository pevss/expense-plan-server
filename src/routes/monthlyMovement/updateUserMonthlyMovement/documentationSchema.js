const { errorSchema } = require("../../../config");

const schema = {
	description: "Updates a monthly movement and its respective movement type",
	tags: ["Monthly movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	body: {
		type: "object",
		required: [
			"id",
			"amount",
			"movementCategoryId",
			"description",
			"color",
		],
		properties: {
			monthlyMovementId: { type: "number" },
			amount: { type: "number" },
			movementCategoryId: { type: "number" },
			description: { type: "string" },
			color: { type: "string", description: "HEX Code" },
		},
	},
	response: {
		200: {
			description: "Updated monthly movement",
			type: "object",
			properties: {
				id: { type: "number" },
				movementTypeId: { type: "number" },
				amount: { type: "number" },
				description: { type: "string" },
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
