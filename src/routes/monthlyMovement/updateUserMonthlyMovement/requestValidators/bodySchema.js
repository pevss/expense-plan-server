const { z } = require("zod");

const {
	idValidator,
	amountValidator,
	descriptionValidator,
	colorValidator,
} = require("../../../../validators/common");

const schema = z.object({
	id: idValidator,
	amount: amountValidator,
	movementCategoryId: idValidator,
	description: descriptionValidator,
	color: colorValidator,
});

module.exports = schema;
