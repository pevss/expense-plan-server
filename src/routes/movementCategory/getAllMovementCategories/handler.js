const movementCategoryServices = require("../../../services/movementCategory");

const getError = require("../../../utils/getError");

const getAllMovementCategories = async function (_, res) {
	const movementCategories = await movementCategoryServices.get();

	if (!movementCategories.length) {
		const error = await getError("ERR_MOVEMENT_CATEGORY_NOT_FOUND");

		res.status(error.status).send(error);
	}

	res.status(200).send(movementCategories);
};

module.exports = getAllMovementCategories;
