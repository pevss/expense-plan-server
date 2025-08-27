const { errorSchema } = require("../../../config");

const schema = {
	description: "Deletes a movement from saving",
	tags: ["Saving"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	querystring: {
		type: "object",
		required: ["savingId", "movementId"],
		properties: {
			savingId: { type: "number" },
			movementId: { type: "number" },
		},
	},
	response: {
		200: {
			description: "Remaning saving movements",
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
