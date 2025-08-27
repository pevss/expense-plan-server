const { z } = require("zod");
const { idValidator } = require("../../../../validators/common");

const schema = z.object({
	savingId: idValidator,
	movementId: idValidator,
});

module.exports = schema;
