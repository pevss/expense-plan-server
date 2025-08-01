require("dotenv").config();

const Fastify = require("fastify");
const cors = require("@fastify/cors");
const swagger = require("@fastify/swagger");
const swaggerUI = require("@fastify/swagger-ui");

const fastify = Fastify();

// API Setup
fastify.register(cors, {
	origin: true,
});

fastify.register(swagger, {
	swagger: {
		info: {
			title: "Expense Plan API",
			description: "Expanse Plan API docs",
			version: "1.0.0",
		},
		host: `${process.env.PUBLIC_URL}`,
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
	},
});

fastify.register(swaggerUI, {
	routePrefix: "/docs",
	exposeRoute: true,
});

//API Endpoints
fastify.register(require("./routes/movementCategory/endpoints"), {
	prefix: "/movementCategory",
});

fastify.register(require("./routes/history/endpoints"), {
	prefix: "/history",
});

fastify.register(require("./routes/movementType/endpoints"), {
	prefix: "/movementType",
});

fastify.register(require("./routes/movement/endpoints"), {
	prefix: "/movement",
});

fastify.register(require("./routes/monthlyMovement/endpoints"), {
	prefix: "/monthlyMovement",
});

// server start
fastify.listen({ port: process.env.PORT || 3333, host: "0.0.0.0" }).then(() => {
	console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
