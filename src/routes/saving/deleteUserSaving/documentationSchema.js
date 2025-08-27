const { errorSchema } = require("../../../config");

const schema = {
	description: "Deleted an user's settings",
	tags: ["Saving"],
	params: {
		type: "object",
		required: ["token", "savingId"],
		properties: {
			token: { type: "string", description: "uuid" },
			savingId: { type: "number" },
		},
	},
	response: {
		200: {
			description: "Remaining user's savings",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "number" },
					description: { type: "string" },
					depositMovementTypeId: { type: "number" },
					withdrawalMovementTypeId: { type: "number" },
					totalAmount: { type: "number" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
