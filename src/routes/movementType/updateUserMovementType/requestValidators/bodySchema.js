const { z } = require("zod");

const {
	idValidator,
	descriptionValidator,
	colorValidator,
} = require("../../../../validators/common");

const schema = z.object({
	movementTypeId: idValidator,
	movementCategoryId: idValidator,
	description: descriptionValidator,
	color: colorValidator,
});

module.exports = schema;
