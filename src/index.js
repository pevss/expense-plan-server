require("dotenv").config();

const Fastify = require("fastify");
const cors = require("@fastify/cors");
const swagger = require("@fastify/swagger");
const swaggerUI = require("@fastify/swagger-ui");

const authPreHandler = require("./hooks/authPreHandler");
const { routesIgnoredByGlobalHooks } = require("./config");

const logger = true;
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
		schemes: [`${process.env.SCHEME}`],
		consumes: ["application/json"],
		produces: ["application/json"],
	},
});

fastify.register(swaggerUI, {
	routePrefix: "/docs",
	exposeRoute: true,
});

//Global Hooks
fastify.addHook("preHandler", async (req, res) => {
	for (const route of routesIgnoredByGlobalHooks) {
		if (req.raw.url.startsWith(route)) {
			return;
		}
	}

	await authPreHandler(req, res);
});

//API Endpoints
fastify.register(require("./routes/user/endpoints"), {
	prefix: "/user",
});

fastify.register(require("./routes/movementCategory/endpoints"), {
	prefix: "/movementCategory",
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

fastify.register(require("./routes/saving/endpoints"), {
	prefix: "/saving",
});

fastify.register(require("./routes/savingMovement/endpoints"), {
	prefix: "/savingMovement",
});

// server start
fastify.listen({ port: process.env.PORT || 3333, host: "0.0.0.0" }).then(() => {
	console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
