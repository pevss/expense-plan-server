const { errorSchema } = require("../../../config");

const schema = {
	description: "Deletes an user's movement",
	tags: ["Movement"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
			movementId: { type: "number" },
		},
	},
	response: {
		200: {
			description: "User movements",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "number" },
					movementTypeId: { type: "number" },
					date: { type: "string", format: "date" },
					amount: { type: "number" },
					description: { type: "string" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
