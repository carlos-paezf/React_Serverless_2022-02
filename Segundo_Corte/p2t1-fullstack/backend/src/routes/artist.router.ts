import { BaseRouter } from "../config"
import { ArtistController } from "../controllers"
import { ArtistMiddleware } from "../middlewares"


export class ArtistRouter extends BaseRouter<ArtistController, ArtistMiddleware> {
    constructor() {
        super(ArtistController, ArtistMiddleware)
    }

    protected routes(): void {
        this.router.param('id', this.middleware.idParamValidator)

        this.router.get(
            `/artists`,
            this.controller.findArtists
        )

        this.router.get(
            `/artists/:id`,
            this.controller.findOneArtistById
        )

        this.router.get(
            `/artists/search/q`,
            this.controller.findArtistsByName
        )

        this.router.post(
            `/artists`,
            this.controller.createArtist
        )

        this.router.put(
            `/artists/:id`,
            this.controller.updateArtistById
        )

        this.router.delete(
            `/artists/disabled/:idDisabled`,
            this.controller.softDeleteArtistById
        )
    }
}