const { errorSchema } = require("../../../config");

const schema = {
	description: "Updates a movement type",
	tags: ["Movement Type"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	body: {
		type: "object",
		required: ["id", "movementCategoryId", "description", "color"],
		properties: {
			id: { type: "number" },
			movementCategoryId: { type: "number" },
			description: { type: "string" },
			color: { type: "string", description: "HEX Code" },
		},
	},
	response: {
		200: {
			description: "Updated movement type",
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
		404: errorSchema,
	},
};

module.exports = schema;
