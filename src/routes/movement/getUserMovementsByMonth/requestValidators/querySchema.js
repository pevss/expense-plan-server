const { z } = require("zod");

const {
	monthValidator,
	yearValidator,
} = require("../../../../validators/movement");

const schema = z.object({
	month: monthValidator,
	year: yearValidator,
});

module.exports = schema;
