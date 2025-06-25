require("dotenv").config();

const Fastify = require("fastify");
const cors = require("@fastify/cors");
const app = Fastify();

app.register(cors, {
	origin: true,
});

app.register(require("./routes/movementCategory/movementCategory"), {
	prefix: "/movementCategory",
});

app.listen({ port: process.env.PORT || 3333, host: "0.0.0.0" }).then(() => {
	console.log(`Server is running at port ${process.env.PORT || 3333}`);
});
