const { errorSchema } = require("../../../config");

const schema = {
	description: "Returns all available app movement categories",
	tags: ["MovementCategory"],
	response: {
		200: {
			description: "Movement category",
			type: "array",
			items: {
				type: "object",
				properties: {
					id: { type: "integer" },
					label: { type: "string" },
					value: { type: "string" },
					bgColor: { type: "string" },
					color: { type: "string" },
				},
			},
		},
		404: errorSchema,
	},
};

module.exports = schema;
