const validateRequestSchema = require("./validateRequestSchema");

const createExistsPreHandler = function ({
	idKey,
	validator,
	existenceCheckFn,
}) {
	return async function (req, res) {
		const { userId } = req;

		//prettier-ignore
		const reqObj = (req["body"]?.[idKey] ? "body" : (req["params"]?.[idKey] ? "params" : "query"));

		const {
			isValid,
			data: idValue,
			error: validationError,
		} = await validateRequestSchema(validator, req[reqObj][idKey]);

		if (!isValid) {
			return res.status(validationError.status).send(validationError);
		}

		const { check: exists, error: existsError } = await existenceCheckFn(
			userId,
			idValue
		);

		if (!exists) {
			return res.status(existsError.status).send(existsError);
		}

		req[idKey] = idValue;
	};
};

module.exports = createExistsPreHandler;
