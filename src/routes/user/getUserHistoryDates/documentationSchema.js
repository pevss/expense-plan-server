const { errorSchema } = require("../../../config");

const schema = {
	description: "Returns user's history dates",
	tags: ["User"],
	params: {
		type: "object",
		required: ["token"],
		properties: {
			token: { type: "string", description: "uuid" },
		},
	},
	response: {
		200: {
			description: "User history",
			type: "array",
			items: {
				type: "object",
				properties: {
					month: { type: "integer" },
					year: { type: "integer" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
