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
				monthlyMovement: {
					type: "object",
					properties: {
						id: { type: "integer" },
						movementTypeId: { type: "integer" },
						amount: { type: "number" },
						description: { type: "string" },
					},
				},
				movementType: {
					type: "object",
					properties: {
						id: { type: "integer" },
						description: { type: "string" },
						mainColor: { type: "string" },
						movementCategoryId: { type: "integer" },
						isDeleted: { type: "boolean" },
						isCreatedBySystem: { type: "boolean" },
					},
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
