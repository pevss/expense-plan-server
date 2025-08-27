const createExistsPreHandler = require("../utils/createExistsPreHandler");
const isUserMovementInCurrentMonth = require("../utils/isUserMovementInCurrentMonth");

const { idValidator } = require("../validators/common");

const isUserMovementInRangePreHandler = createExistsPreHandler({
	existenceCheckFn: isUserMovementInCurrentMonth,
	idKey: "movementId",
	validator: idValidator,
});

module.exports = isUserMovementInRangePreHandler;
