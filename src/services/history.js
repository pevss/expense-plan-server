const prisma = require("../plugins/prisma");

const get = async function (userId) {
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

module.exports = { get };
