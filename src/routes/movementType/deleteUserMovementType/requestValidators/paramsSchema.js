const { z } = require("zod");

const {
	authTokenValidator,
	idValidator,
} = require("../../../../validators/common");

const schema = z.object({
	token: authTokenValidator,
	movementTypeId: idValidator,
});

module.exports = schema;
