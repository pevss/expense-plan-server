const { z } = require("zod");
const {
	idValidator,
	descriptionValidator,
	amountValidator,
} = require("../../../../validators/common");

const schema = z.object({
	id: idValidator,
	movementTypeId: idValidator,
	amount: amountValidator,
	description: descriptionValidator,
});

module.exports = schema;
