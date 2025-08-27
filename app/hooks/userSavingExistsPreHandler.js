const createExistsPreHandler = require("../utils/createExistsPreHandler");
const doesUserSavingExist = require("../utils/doesUserSavingExist");
const { idValidator } = require("../validators/common");

const userSavingExistsPreHandler = createExistsPreHandler({
	idKey: "savingId",
	validator: idValidator,
	existenceCheckFn: doesUserSavingExist,
});

module.exports = userSavingExistsPreHandler;
