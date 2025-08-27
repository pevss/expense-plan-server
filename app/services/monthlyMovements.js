const prisma = require("../plugins/prisma");

const {
	create: createMovementType,
	softDelete: deleteMovementType,
	update: updateMovementType,
} = require("./movementType");

const getOne = async function (userId, id) {
	const monthlyMovement = await prisma.monthlyMovement.findFirst({
		where: { userId, id },
		include: { movementType: true },
	});

	return {
		id: monthlyMovement.id,
		description: monthlyMovement.description,
		amount: monthlyMovement.amount,
		movementTypeId: monthlyMovement.movementType.id,
	};
};

const create = async function ({
	userId,
	movementCategoryId,
	amount,
	description,
	color,
}) {
	const { id: movementTypeId } = await createMovementType({
		userId,
		movementCategoryId,
		description,
		color,
		isCreatedBySystem: 1,
	});

	const { id: createdMonthlyMovementId } =
		await prisma.monthlyMovement.create({
			data: {
				userId,
				movementTypeId,
				amount,
				description,
			},
		});

	const { id } = await prisma.monthlyMovement.findFirst({
		where: { userId, id: createdMonthlyMovementId },
		include: { movementType: true },
	});

	const createdMonthlyMovement = await getOne(userId, id);

	return createdMonthlyMovement;
};

const get = async function (userId) {
	const userMonthlyMovements = await prisma.monthlyMovement.findMany({
		select: {
			id: true,
			movementTypeId: true,
			amount: true,
			description: true,
		},
		where: { userId, isDeleted: 0 },
	});

	return userMonthlyMovements;
};

const update = async function ({
	id,
	userId,
	movementCategoryId,
	amount,
	description,
	color,
}) {
	const updatedMonthlyMovement = await prisma.monthlyMovement.update({
		data: {
			amount,
			description,
			updatedAt: new Date(),
		},
		where: { id, userId, isDeleted: 0 },
	});

	await updateMovementType({
		id: updatedMonthlyMovement.movementTypeId,
		userId,
		color,
		description,
		movementCategoryId,
		isUpdatedBySystem: 1,
	});

	return {
		id: updatedMonthlyMovement.id,
		movementTypeId: updatedMonthlyMovement.movementTypeId,
		amount: updatedMonthlyMovement.amount,
		description: updatedMonthlyMovement.description,
	};
};

const softDelete = async function (id, userId) {
	const deletedMonthlyMovement = await prisma.monthlyMovement.update({
		data: {
			isDeleted: 1,
			deletedAt: new Date(),
		},
		where: {
			id,
			userId,
		},
	});

	await deleteMovementType(deletedMonthlyMovement.movementTypeId, userId, 1);

	return deletedMonthlyMovement;
};

module.exports = { create, get, getOne, update, softDelete };
