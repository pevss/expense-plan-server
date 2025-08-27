const { z } = require("zod");

const {
	descriptionValidator,
	idValidator,
	amountValidator,
} = require("../../../../validators/common");

const schema = z.object({
	movementTypeId: idValidator,
	amount: amountValidator,
	description: descriptionValidator,
});

module.exports = schema;
