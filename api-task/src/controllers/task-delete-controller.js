import { HttpHelper } from "../helpers/http-helper.js";
import { TaskRepository } from "../repositories/task-repository.js";

export class TaskDeleteController {
    async handle(request, response) {
        const httpHelper = new HttpHelper(response);

        try {
            const { id: userId } = request.user;
            const { id } = request.body;

            const taskRepository = new TaskRepository();

            const taskExists = await taskRepository.get({ id, userId });
            if (!taskExists) {
                return httpHelper.badRequest("Dados inválidos");
            }
            const taskDeleted = await taskRepository.delete({ id, userId });

            return httpHelper.ok(taskDeleted);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}
