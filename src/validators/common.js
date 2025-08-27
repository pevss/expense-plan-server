const { z } = require("zod");

const authTokenValidator = z
	.string({ message: "ERR_INVALID_TOKEN" })
	.uuid({ message: "ERR_INVALID_TOKEN" });

const idValidator = z
	.number({ message: "ERR_INVALID_ID" })
	.min(0, { message: "ERR_INVALID_ID" });

const amountValidator = z
	.number({ message: "ERR_INVALID_AMOUNT" })
	.min(0, { message: "ERR_INVALID_AMOUNT" });

const descriptionValidator = z
	.string({ message: "ERR_INVALID_DESCRIPTION" })
	.min(0, { message: "ERR_INVALID_DESCRIPTION" });

const colorValidator = z
	.string({ message: "ERR_INVALID_COLOR" })
	.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
		message: "ERR_INVALID_COLOR",
	});

module.exports = {
	authTokenValidator,
	idValidator,
	amountValidator,
	descriptionValidator,
	colorValidator,
};
