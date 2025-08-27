const { z } = require("zod");
const { descriptionValidator } = require("../../../../validators/common");

const schema = z.object({
	description: descriptionValidator,
});

module.exports = schema;
