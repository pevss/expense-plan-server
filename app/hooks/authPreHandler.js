const getUserIdFromToken = require("../utils/getUserIdFromToken");
const validateRequestSchema = require("../utils/validateRequestSchema");
const { authTokenValidator } = require("../validators/common");

const authPreHandler = async function (req, res) {
	const {
		isValid: isTokenValid,
		data: token,
		error: invalidTokenError,
	} = await validateRequestSchema(authTokenValidator, req.params.token);

	if (!isTokenValid) {
		return res.status(invalidTokenError.status).send(invalidTokenError);
	}

	const {
		isUserAuthenticated,
		userId,
		error: authenticationError,
	} = await getUserIdFromToken(token);

	if (!isUserAuthenticated) {
		return res.status(authenticationError.status).send(authenticationError);
	}

	req.userId = userId;
};

module.exports = authPreHandler;
