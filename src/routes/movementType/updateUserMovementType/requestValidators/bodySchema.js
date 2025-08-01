const { z } = require("zod");

const {
	idValidator,
	descriptionValidator,
	colorValidator,
} = require("../../../../validators/common");

const schema = z.object({
	id: idValidator,
	movementCategoryId: idValidator,
	description: descriptionValidator,
	color: colorValidator,
});

module.exports = schema;
