const { z } = require("zod");
const { authTokenValidator } = require("../../../../validators/common");
const schema = z.object({
	token: authTokenValidator,
});

module.exports = schema;
