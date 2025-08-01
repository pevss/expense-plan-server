const { z } = require("zod");

const {
	authTokenValidator,
	idValidator,
} = require("../../../../validators/common");

const schema = z.object({
	token: authTokenValidator,
	monthlyMovementId: idValidator,
});

module.exports = schema;
