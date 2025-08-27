const { errorSchema } = require("../../../config");

const schema = {
	description: "Creates a saving movement",
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
		required: ["savingId", "movementId", "movementTypeId", "amount"],
		properties: {
			savingId: { type: "number" },
			movementId: { type: "number" },
			movementTypeId: { type: "number" },
			amount: { type: "number" },
		},
	},
	response: {
		200: {
			description: "Updated saving movement",
			type: "object",
			properties: {
				savingId: { type: "number" },
				movement: {
					id: { type: "number" },
					movementTypeId: { type: "number" },
					date: { type: "date" },
					amount: { type: "number" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
