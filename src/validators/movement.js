const { z } = require("zod");

const monthValidator = z.number().min(0).max(11);
const yearValidator = z.number().min(1999).max(2999);

module.exports = { monthValidator, yearValidator };
