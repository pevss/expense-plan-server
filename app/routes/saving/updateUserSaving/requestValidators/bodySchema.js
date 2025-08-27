const { z } = require("zod");
const {
	idValidator,
	descriptionValidator,
} = require("../../../../validators/common");

const schema = z.object({
	savingId: idValidator,
	description: descriptionValidator,
});

module.exports = schema;
