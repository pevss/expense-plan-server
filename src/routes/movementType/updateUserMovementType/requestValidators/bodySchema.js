const { z } = require("zod");

const {
	idValidator,
	descriptionValidator,
	colorValidator,
	booleanValidator,
} = require("../../../../validators/common");

const schema = z.object({
	movementTypeId: idValidator,
	movementCategoryId: idValidator,
	description: descriptionValidator,
	mainColor: colorValidator,
	isUpdatedBySystem: booleanValidator,
});

module.exports = schema;
