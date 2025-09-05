import Fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";
import fCookie from "@fastify/cookie";

import { UserRegisterController } from "./controllers/user-register-controller.js";
import { UserLoginController } from "./controllers/user-login-controller.js";
import { TaskCreateController } from "./controllers/task-create-controller.js";
import { TaskListAllController } from "./controllers/task-list-all-controller.js";
import { TaskUpdateController } from "./controllers/task-update-controller.js";
import { TaskDeleteController } from "./controllers/task-delete-controller.js";
import { HttpHelper } from "./helpers/http-helper.js";

const fastify = Fastify({ logger: true });

fastify.register(jwt, { secret: process.env.SECRET_JWT });
fastify.register(cors, { origin: "http://localhost:8081", credentials: true });
fastify.register(fCookie);

// Middleware
fastify.decorate("authenticate", async (request, reply) => {
    const httpHelper = new HttpHelper(reply);

    try {
        const token = request.cookies.token;
        if (!token) throw new Error("Token não encontrado.");
        request.headers.authorization = `Bearer ${token}`;
        await request.jwtVerify();
    } catch (error) {
        console.error(error);
        return httpHelper.unauthorized();
    }
});

// Rotas

// Usuário
fastify.post("/api/user/register", new UserRegisterController().handle);
fastify.post("/api/user/login", new UserLoginController().handle);
fastify.get("/api/user/logout", async (request, response) => {
    const httpHelper = new HttpHelper(response);
    response.clearCookie("token", { path: "/" });
    return httpHelper.ok({ message: "Saindo..." });
});

// Tarefa
fastify.post(
    "/api/task/create",
    { preHandler: [fastify.authenticate] },
    new TaskCreateController().handle,
);
fastify.get(
    "/api/task/list-all",
    { preHandler: [fastify.authenticate] },
    new TaskListAllController().handle,
);
fastify.patch(
    "/api/task/update",
    { preHandler: [fastify.authenticate] },
    new TaskUpdateController().handle,
);
fastify.delete(
    "/api/task/delete",
    { preHandler: [fastify.authenticate] },
    new TaskDeleteController().handle,
);

// Start
fastify.listen({ port: 8080 }).then(() => {
    fastify.log.info("Server started!");
});
