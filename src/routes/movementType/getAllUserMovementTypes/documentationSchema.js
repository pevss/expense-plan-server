const { errorSchema } = require("../../../config");

const schema = {
	description: "Gets all user movement types",
	tags: ["Movement Type"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	response: {
		200: {
			description: "User monthly movements",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "number" },
					description: { type: "string" },
					mainColor: { type: "string", description: "HEX Code" },
					type: { type: "string" },
					isCreatedBySystem: { type: "boolean" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
