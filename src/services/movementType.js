const prisma = require("../plugins/prisma");

const getOne = async function (userId, id) {
	const userMovementType = await prisma.movementType.findFirst({
		where: {
			id,
			userId,
		},
		include: {
			movementCategory: true,
		},
	});

	const cleanUserMovementType = {
		id: userMovementType.id,
		description: userMovementType.description,
		mainColor: userMovementType.mainColor,
		type: userMovementType.movementCategory.value,
		isDeleted: !!userMovementType.isDeleted,
		isCreatedBySystem: !!userMovementType.isCreatedBySystem,
	};

	return cleanUserMovementType;
};

const create = async function ({
	userId,
	movementCategoryId,
	description,
	color,
	isCreatedBySystem = 0,
}) {
	const { id: createdMovementTypeId } = await prisma.movementType.create({
		data: {
			userId,
			movementCategoryId,
			description,
			mainColor: color,
			isCreatedBySystem,
		},
	});

	const createdMovementType = await getOne(userId, createdMovementTypeId);

	return {
		id: createdMovementType.id,
		description: createdMovementType.description,
		mainColor: createdMovementType.mainColor,
		type: createdMovementType.type,
		isDeleted: !!createdMovementType.isDeleted,
		isCreatedBySystem: createdMovementType.isCreatedBySystem,
	};
};

const get = async function (userId) {
	const userMovementTypes = await prisma.movementType.findMany({
		where: {
			userId,
		},
		include: {
			movementCategory: true,
		},
	});

	const cleanUserMovementTypes = userMovementTypes.map((movementType) => {
		return {
			id: movementType.id,
			description: movementType.description,
			mainColor: movementType.mainColor,
			type: movementType.movementCategory.value,
			isDeleted: !!movementType.isDeleted,
			isCreatedBySystem: !!movementType.isCreatedBySystem,
		};
	});

	return cleanUserMovementTypes;
};

const update = async function ({
	id,
	userId,
	movementCategoryId,
	description,
	color,
	isUpdatedBySystem,
}) {
	await prisma.movementType.update({
		data: {
			movementCategoryId,
			description,
			mainColor: color,
			updatedAt: new Date(),
		},
		where: {
			id,
			userId,
			isDeleted: 0,
			isCreatedBySystem: isUpdatedBySystem,
		},
	});

	return await getOne(userId, id);
};

const softDelete = async function (id, userId, isDeletedBySystem) {
	const deletedMovementType = await prisma.movementType.update({
		data: {
			isDeleted: 1,
			deletedAt: new Date(),
		},
		where: {
			id,
			userId,
			isCreatedBySystem: isDeletedBySystem,
		},
	});

	return await getOne(userId, deletedMovementType.id);
};

module.exports = { create, get, getOne, update, softDelete };
