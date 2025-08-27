const prisma = require("../plugins/prisma");

const getUserHistoryDates = async function (userId) {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();
	const formatedCurrentDate = `${currentMonth}-${currentYear}`;

	const userMovementDates = await prisma.movement.findMany({
		select: { date: true },
		where: { userId, isDeleted: 0 },
	});

	const formatedUniqueDates = Array.from(
		new Set(
			userMovementDates.map(({ date }) => {
				const month = date.getMonth();
				const year = date.getFullYear();

				return `${month}-${year}`;
			})
		)
	);

	if (!formatedUniqueDates.some((date) => date === formatedCurrentDate)) {
		formatedUniqueDates.push(formatedCurrentDate);
	}

	const historyDates = formatedUniqueDates.map((date) => {
		const [month, year] = date.split("-");
		return { month, year };
	});

	return historyDates;
};

const getUserOveralls = async function (userId) {
	const movements = await prisma.movement.findMany({
		where: {
			userId,
			isDeleted: 0,
		},
		include: {
			movementType: true,
		},
	});

	const userOveralls = movements.reduce(
		(acc, movement) => {
			const amount = Number.parseFloat(movement.amount);

			if (movement.movementType.movementCategoryId === 1) {
				acc.totalDeposited += amount;
				acc.total += amount;
			} else if (movement.movementType.movementCategoryId === 2) {
				acc.totalWithdrew += amount;
				acc.total -= amount;
			}

			return acc;
		},
		{ totalDeposited: 0, totalWithdrew: 0, total: 0 }
	);

	return userOveralls;
};

module.exports = { getUserHistoryDates, getUserOveralls };
