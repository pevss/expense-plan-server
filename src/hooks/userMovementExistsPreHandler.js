const createExistsPreHandler = require("../utils/createExistsPreHandler");
const doesUserMovementExist = require("../utils/doesUserMovementExist");
const { idValidator } = require("../validators/common");

const userMovementExistsPreHandler = createExistsPreHandler({
	existenceCheckFn: doesUserMovementExist,
	idKey: "movementId",
	validator: idValidator,
});

module.exports = userMovementExistsPreHandler;
