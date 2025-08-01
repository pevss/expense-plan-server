const { getOne } = require("../services/movement");

const isUserMovementInCurrentMonth = async function (userId, id) {
	const movement = await getOne(userId, id);

	const movementMonth = movement.date.getMonth();
	const movementYear = movement.date.getFullYear();
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const formatedMovementDate = `${movementMonth}-${movementYear}`;
	const formatedCurrentDate = `${currentMonth}-${currentYear}`;

	return formatedCurrentDate === formatedMovementDate;
};

module.exports = isUserMovementInCurrentMonth;
