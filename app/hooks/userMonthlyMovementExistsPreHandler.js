const createExistsPreHandler = require("../utils/createExistsPreHandler");
const doesUserMonthlyMovementExist = require("../utils/doesUserMonthlyMovementExist");
const { idValidator } = require("../validators/common");

const userMonthlyMovementExistsPreHandler = createExistsPreHandler({
	idKey: "monthlyMovementId",
	validator: idValidator,
	existenceCheckFn: doesUserMonthlyMovementExist,
});

module.exports = userMonthlyMovementExistsPreHandler;
