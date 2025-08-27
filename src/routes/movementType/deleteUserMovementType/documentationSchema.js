const { errorSchema } = require("../../../config");

const schema = {
	description: "Deletes a movement type",
	tags: ["Movement Type"],
	params: {
		type: "object",
		required: ["token", "movementTypeId"],
		properties: {
			token: { type: "string", description: "uuid" },
			movementTypeId: { type: "number" },
		},
	},
	response: {
		200: {
			description: "User monthly movements after deletion",
			type: "array",
			items: {
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
		404: errorSchema,
	},
};

module.exports = schema;
