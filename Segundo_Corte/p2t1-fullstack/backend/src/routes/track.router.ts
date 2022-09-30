import { BaseRouter } from "../config"
import { TrackController } from "../controllers"
import { TrackMiddleware } from "../middlewares"


export class TrackRouter extends BaseRouter<TrackController, TrackMiddleware> {
    constructor() {
        super(TrackController, TrackMiddleware)
    }

    protected routes(): void {
        this.router.param('id', this.middleware.idParamValidator)

        this.router.get(
            `/tracks`,
            this.controller.findTracks
        )

        this.router.get(
            `/tracks/:id`,
            this.controller.findOneTrackById
        )

        this.router.get(
            `/tracks/search/q`,
            this.controller.findTracksByName
        )

        this.router.post(
            `/tracks`,
            [
                this.middleware.trackValidator
            ],
            this.controller.createTrack
        )

        this.router.put(
            `/tracks/:id`,
            [
                this.middleware.trackValidator
            ],
            this.controller.createTrack
        )

        this.router.delete(
            `/tracks/disabled/:idDisabled`,
            this.controller.deleteTrackById
        )
    }
}