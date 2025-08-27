const { errorSchema } = require("../../../config");

const schema = {
	description: "Gets all movements from saving",
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
			description: "Saving movements",
			type: "array",
			items: {
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
		},
		404: errorSchema,
	},
};

module.exports = schema;
