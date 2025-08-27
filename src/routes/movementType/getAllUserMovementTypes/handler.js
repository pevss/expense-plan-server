const { get } = require("../../../services/movementType");

const getAllUserMovementTypes = async function (req, res) {
	const { userId } = req;

	const userMovementTypes = await get(userId);

	return res.status(200).send(userMovementTypes);
};

module.exports = getAllUserMovementTypes;
