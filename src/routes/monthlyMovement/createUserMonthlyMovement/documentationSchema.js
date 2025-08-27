const { errorSchema } = require("../../../config");

const schema = {
	description: "Creates a new monthly movement",
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
		properties: {
			amount: { type: "number" },
			movementCategoryId: { type: "integer" },
			description: { type: "string" },
			color: { type: "string", description: "Hex code (#ffffff)" },
		},
		required: ["amount", "movementCategoryId", "description", "color"],
	},
	response: {
		200: {
			description: "Created monthly movement",
			type: "object",
			properties: {
				id: { type: "integer" },
				movementTypeId: { type: "integer" },
				amount: { type: "number" },
				description: { type: "string" },
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
