const doesMovementCategoryExist = require("../utils/doesMovementCategoryExist");
const validadeRequestSchema = require("../utils/validateRequestSchema");
const { idValidator } = require("../validators/common");

const movementCategoryExistsPreHandler = async function (req, res) {
	const {
		isValid: isMovementCategoryIdValid,
		data: movementCategoryId,
		error: invalidMovementCategoryError,
	} = await validadeRequestSchema(idValidator, req.body.movementCategoryId);

	if (!isMovementCategoryIdValid) {
		return res
			.status(invalidMovementCategoryError.status)
			.send(invalidMovementCategoryError);
	}

	const {
		check: doesMovementCategoryExistCheck,
		error: doesMovementCategoryExistError,
	} = await doesMovementCategoryExist(movementCategoryId);

	if (!doesMovementCategoryExistCheck) {
		return res
			.status(doesMovementCategoryExistError.status)
			.send(doesMovementCategoryExistError);
	}

	req.movementCategoryId = movementCategoryId;
};

module.exports = movementCategoryExistsPreHandler;
