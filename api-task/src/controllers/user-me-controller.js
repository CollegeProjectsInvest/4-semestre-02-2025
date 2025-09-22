import { HttpHelper } from "../helpers/http-helper.js";
import { UserRepository } from "../repositories/user-repository.js";

export class UserMeController {
    async handle(request, response) {
        const httpHelper = new HttpHelper(response);

        try {
            const { id: userId } = request.user;

            if (!userId) {
                return httpHelper.unauthorized();
            }

            const userRepository = new UserRepository();
            const user = await userRepository.findById(userId);

            if (!user) {
                return httpHelper.unauthorized();
            }

            return httpHelper.ok({
                user: { email: user.email, createdAt: user.createdAt },
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}
