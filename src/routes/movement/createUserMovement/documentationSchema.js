const { errorSchema } = require("../../../config");

const schema = {
	description: "Creates a movement",
	tags: ["Movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	body: {
		type: "object",
		required: ["movementTypeId", "amount", "description"],
		properties: {
			movementTypeId: { type: "number" },
			amount: { type: "number" },
			description: { type: "string" },
		},
	},
	response: {
		200: {
			description: "Created movement",
			type: "object",
			properties: {
				id: { type: "number" },
				movementTypeId: { type: "number" },
				date: { type: "string", format: "date" },
				amount: { type: "number" },
				description: { type: "string" },
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
