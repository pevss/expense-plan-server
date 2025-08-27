const prisma = require("../plugins/prisma");

const {
	create: createMovement,
	getOne: getOneMovement,
} = require("./movement");

const getOne = async function (userId, savingId, movementId) {
	const savingMovement = await prisma.savingMovement.findFirst({
		where: {
			savingId,
			movementId,
			saving: {
				userId,
			},
			movement: {
				userId,
			},
		},
	});

	const movement = await getOneMovement(userId, movementId);

	const cleanMovement = {
		id: movement.id,
		movementTypeId: movement.movementTypeId,
		date: movement.date,
		amount: movement.amount,
	};

	const cleanSavingMovement = {
		savingId: savingMovement.savingId,
		movement: cleanMovement,
	};

	return cleanSavingMovement;
};

const create = async function ({ userId, savingId, movementTypeId, amount }) {
	const { getOne: getOneSaving } = require("./saving");

	const { description: savingDescription } = await getOneSaving(
		userId,
		savingId
	);

	const { id: createdMovementId } = await createMovement({
		userId,
		movementTypeId,
		amount,
		description: savingDescription,
	});

	await prisma.savingMovement.create({
		data: {
			movement: {
				connect: {
					id: createdMovementId,
				},
			},
			saving: {
				connect: {
					id: savingId,
				},
			},
		},
	});

	return await getOne(userId, savingId, createdMovementId);
};

const getPerSaving = async function (userId, savingId) {
	const savingMovements = await prisma.savingMovement.findMany({
		where: {
			saving: {
				userId,
				isDeleted: 0,
			},
			movement: {
				userId,
				isDeleted: 0,
			},
			savingId,
		},
	});

	const cleanSavingMovements = Promise.all(
		savingMovements.map(async (savingMovement) => {
			const cleanSavingMovement = await getOne(
				userId,
				savingMovement.savingId,
				savingMovement.movementId
			);

			return cleanSavingMovement;
		})
	);

	return cleanSavingMovements;
};

const update = async function ({
	userId,
	savingId,
	movementId,
	movementTypeId,
	amount,
}) {
	await prisma.savingMovement.update({
		data: {
			movement: {
				update: {
					amount,
					movementTypeId,
				},
			},
		},
		where: {
			savingId_movementId: {
				savingId,
				movementId,
			},
		},
	});

	return await getOne(userId, savingId, movementId);
};

const softDelete = async function (userId, savingId, movementId) {
	await prisma.savingMovement.update({
		data: {
			movement: {
				update: {
					isDeleted: 1,
					deletedAt: new Date(),
				},
			},
		},
		where: {
			savingId_movementId: {
				savingId,
				movementId,
			},
		},
	});

	return await getOne(userId, savingId, movementId);
};

module.exports = { create, getPerSaving, getOne, update, softDelete };
