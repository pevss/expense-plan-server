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
			id: { type: "number" },
			amount: { type: "number" },
			movementCategoryId: { type: "number" },
			description: { type: "string" },
			color: { type: "string", description: "HEX Code" },
		},
	},
	response: {
		200: {
			description:
				"Updated monthly movement and its respective movement type",
			type: "object",
			properties: {
				updatedMonthlyMovement: {
					type: "object",
					properties: {
						id: { type: "number" },
						movementTypeId: { type: "number" },
						amount: { type: "number" },
						description: { type: "string" },
					},
				},
				updatedMovementType: {
					type: "object",
					properties: {
						id: { type: "number" },
						description: { type: "string" },
						mainColor: { type: "string", description: "HEX Code" },
						type: { type: "string" },
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
