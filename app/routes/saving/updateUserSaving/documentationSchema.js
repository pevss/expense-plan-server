const { errorSchema } = require("../../../config");

const schema = {
	description: "Updates a saving",
	tags: ["Saving"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	body: {
		type: "object",
		required: ["savingId", "description"],
		properties: {
			savingId: { type: "number" },
			description: { type: "string" },
		},
	},
	response: {
		200: {
			description: "Updated saving",
			type: "object",
			properties: {
				id: { type: "number" },
				description: { type: "string" },
				depositMovementTypeId: { type: "number" },
				withdrawalMovementTypeId: { type: "number" },
				totalAmount: { type: "number" },
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
