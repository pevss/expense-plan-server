const createExistsPreHandler = require("../utils/createExistsPreHandler");
const doesUserMovementTypeExist = require("../utils/doesUserMovementTypeExist");
const { idValidator } = require("../validators/common");

const userMovementTypeExistsPreHandler = createExistsPreHandler({
	existenceCheckFn: doesUserMovementTypeExist,
	idKey: "movementTypeId",
	validator: idValidator,
});

module.exports = userMovementTypeExistsPreHandler;
