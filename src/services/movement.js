const prisma = require("../plugins/prisma");

const getOne = async function (userId, id) {
	const movement = await prisma.movement.findFirst({
		where: {
			id,
			userId,
			isDeleted: 0,
		},
	});

	const cleanMovement = movement && {
		id: movement.id,
		movementTypeId: movement.movementTypeId,
		date: movement.date,
		amount: movement.amount,
		description: movement.description,
	};

	return cleanMovement;
};

const create = async function ({
	userId,
	movementTypeId,
	description,
	amount,
}) {
	const createdMovement = await prisma.movement.create({
		data: {
			userId,
			movementTypeId,
			description,
			amount,
			date: new Date(),
		},
	});

	return createdMovement;
};

const getByDate = async function (userId, date) {
	const dateStart = new Date(date.year, date.month, 1);
	const dateEnd = new Date(date.year, date.month + 1, 0);

	const movements = await prisma.movement.findMany({
		where: {
			userId,
			isDeleted: 0,
			date: {
				gte: dateStart,
				lte: dateEnd,
			},
		},
	});

	const cleanMovements = movements.map((movement) => {
		return {
			id: movement.id,
			movementTypeId: movement.movementTypeId,
			date: movement.date,
			amount: movement.amount,
			description: movement.description,
		};
	});

	return cleanMovements;
};

const update = async function ({
	userId,
	id,
	movementTypeId,
	description,
	amount,
}) {
	const updatedMovement = await prisma.movement.update({
		data: {
			description,
			amount,
			movementTypeId,
		},
		where: {
			userId,
			id,
			isDeleted,
		},
	});

	const cleanUpdatedMovement = {
		id: updatedMovement.id,
		movementTypeId: updatedMovement.movementTypeId,
		date: updatedMovement.date,
		amount: updatedMovement.amount,
		description: updatedMovement.description,
	};

	return cleanUpdatedMovement;
};

const softDelete = async function (userId, id) {
	const deletedMovement = await prisma.movement.update({
		data: {
			isDeleted: 1,
			deletedAt: new Date(),
		},
		where: {
			userId,
			id,
			isDeleted: 0,
		},
	});

	return deletedMovement;
};

module.exports = { create, getByDate, getOne, update, softDelete };
