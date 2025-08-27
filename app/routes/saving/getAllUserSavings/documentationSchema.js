const { errorSchema } = require("../../../config");

const schema = {
	description: "Gets all user's settings",
	tags: ["Saving"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	response: {
		200: {
			description: "All user's savings",
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
