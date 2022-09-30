import { BaseRouter } from "../config"
import { UserController } from "../controllers"
import { UserMiddleware } from "../middlewares"


export class UserRouter extends BaseRouter<UserController, UserMiddleware> {
    constructor() {
        super(UserController, UserMiddleware)
    }

    protected routes(): void {
        this.router.param('id', this.middleware.idParamValidator)

        this.router.get(
            `/users`,
            this.controller.findUsers
        )

        this.router.get(
            `/users/:id`,
            this.controller.findOneUserById
        )

        this.router.get(
            `/users/search/q`,
            this.controller.findUserByUsername
        )

        this.router.post(
            `/users`,
            [
                this.middleware.userValidator
            ],
            this.controller.createUser
        )

        this.router.put(
            `/users/:id`,
            [
                this.middleware.userValidator
            ],
            this.controller.createUser
        )

        this.router.delete(
            `/users/disabled/:idDisabled`,
            this.controller.softDeleteUserById
        )
    }
}