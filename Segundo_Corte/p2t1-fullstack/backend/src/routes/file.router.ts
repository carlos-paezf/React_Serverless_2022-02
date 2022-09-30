import { BaseRouter } from "../config"
import { FileController } from "../controllers"
import { FileMiddleware } from "../middlewares"


export class FileRouter extends BaseRouter<FileController, FileMiddleware> {
    constructor() {
        super(FileController, FileMiddleware)
    }

    protected routes(): void {
        this.router.param('id', this.middleware.idParamValidator)

        this.router.get(
            `/files`,
            this.controller.findFiles
        )

        this.router.get(
            `/files/:id`,
            this.controller.findOneFileById
        )

        this.router.post(
            `/files`,
            [
                this.middleware.fileValidator
            ],
            this.controller.createFile
        )

        this.router.put(
            `/files/:id`,
            [
                this.middleware.fileValidator
            ],
            this.controller.updateFileById
        )

        this.router.delete(
            `/files/disabled/:idDisabled`,
            this.controller.deleteFileById
        )
    }
}