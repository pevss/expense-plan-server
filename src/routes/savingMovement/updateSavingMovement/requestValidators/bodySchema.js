const { z } = require("zod");
const {
	idValidator,
	amountValidator,
} = require("../../../../validators/common");

const schema = z.object({
	savingId: idValidator,
	movementId: idValidator,
	movementTypeId: idValidator,
	amount: amountValidator,
});

module.exports = schema;
