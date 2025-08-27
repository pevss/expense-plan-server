const { getOne } = require("../services/movement");
const getError = require("./getError");

const isUserMovementInCurrentMonth = async function (userId, id) {
	const validation = {
		check: true,
		error: null,
	};

	const movement = await getOne(userId, id);

	const movementMonth = movement.date.getMonth();
	const movementYear = movement.date.getFullYear();
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const formatedMovementDate = `${movementMonth}-${movementYear}`;
	const formatedCurrentDate = `${currentMonth}-${currentYear}`;

	if (!formatedCurrentDate === formatedMovementDate) {
		validation.check = false;
		validation.error = await getError("ERR_MOVEMENT_OUT_OF_RANGE");
	}

	return validation;
};

module.exports = isUserMovementInCurrentMonth;
