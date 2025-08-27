const prisma = require("../plugins/prisma");

const {
	create: createMovementType,
	softDelete: deleteMovementType,
} = require("./movementType");

const { softDelete: deleteMovement } = require("./movement");

const getOne = async function (userId, savingId) {
	const {
		getPerSaving: getSavingMovementPerSaving,
	} = require("./savingMovement");

	const saving = await prisma.saving.findFirst({
		where: {
			userId,
			id: savingId,
		},
	});

	const savingMovements = await getSavingMovementPerSaving(userId, savingId);

	const totalSavingAmount = savingMovements.reduce((acc, savingMovement) => {
		const isDeposit =
			savingMovement?.movement?.movementTypeId ===
			saving.depositMovementTypeId;

		const isWithdrawal =
			savingMovement?.movement?.movementTypeId ===
			saving.withdrawalMovementTypeId;

		if (isDeposit) {
			acc += savingMovement?.movement?.amount;
		} else if (isWithdrawal) {
			acc -= savingMovement?.movement?.amount;
		}

		return Number.parseFloat(acc);
	}, 0);

	const cleanSaving = {
		id: saving.id,
		description: saving.description,
		depositMovementTypeId: saving.depositMovementTypeId,
		withdrawalMovementTypeId: saving.withdrawalMovementTypeId,
		totalAmount: totalSavingAmount,
	};

	return cleanSaving;
};

const create = async function ({ userId, description }) {
	const { id: depositMovementTypeId } = await createMovementType({
		userId,
		color: "#5ad36eff",
		description: `${description} Income`,
		movementCategoryId: 2, // inverted cuz its related to the system if u deposit a saving ur taking away from ur current balance
		isCreatedBySystem: 1,
	});

	const { id: withdrawalMovementTypeId } = await createMovementType({
		userId,
		color: "#d35a5aff",
		description: `${description} Outcome`,
		movementCategoryId: 1, // inverted cuz its related to the system if u deposit a saving ur taking away from ur current balance
		isCreatedBySystem: 2,
	});

	const createdSaving = await prisma.saving.create({
		data: {
			userId,
			description,
			depositMovementTypeId,
			withdrawalMovementTypeId,
			createdAt: new Date(),
		},
	});

	return await getOne(userId, createdSaving.id);
};

const get = async function (userId) {
	const savings = await prisma.saving.findMany({
		where: {
			userId,
			isDeleted: 0,
		},
	});

	const cleanSavings = Promise.all(
		savings.map(async (saving) => {
			return await getOne(userId, saving.id);
		})
	);

	return cleanSavings;
};

const update = async function ({ userId, savingId, description }) {
	await prisma.saving.update({
		data: {
			description,
			updatedAt: new Date(),
		},
		where: {
			userId,
			id: savingId,
			isDeleted: 0,
		},
	});

	return await getOne(userId, savingId);
};

const softDelete = async function (userId, savingId) {
	const { getPerSaving: getSavingMovements } = require("./savingMovement");

	const deletedSaving = await prisma.saving.update({
		data: {
			isDeleted: 1,
			deletedAt: new Date(),
		},
		where: {
			userId,
			id: savingId,
			isDeleted: 0,
		},
	});

	const savingMovements = await getSavingMovements(userId, savingId);

	// prettier-ignore
	for (const {movement: {id: movementId}} of savingMovements) {
		await deleteMovement(userId, movementId);
	}

	await deleteMovementType(deletedSaving.depositMovementTypeId, userId);
	await deleteMovementType(deletedSaving.withdrawalMovementTypeId, userId);

	return await getOne(userId, savingId);
};

module.exports = { create, get, getOne, update, softDelete };
