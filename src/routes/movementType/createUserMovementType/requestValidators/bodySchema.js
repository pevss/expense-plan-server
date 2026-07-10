const { z } = require("zod");

const {
	idValidator,
	descriptionValidator,
	colorValidator,
} = require("../../../../validators/common");

const schema = z.object({
	movementCategoryId: idValidator,
	description: descriptionValidator,
	mainColor: colorValidator,
});

module.exports = schema;
