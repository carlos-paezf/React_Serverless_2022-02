import { validate } from "class-validator"
import { red } from "colors"
import { NextFunction, Request, Response } from "express"
import { TrackDTO } from "../dtos"
import { TrackService } from "../services"
import { HttpResponse } from "../shared/response/http.response"


export class TrackMiddleware {
    private _service = new TrackService()
    private _httpResponse = new HttpResponse()

    public idParamValidator = async (req: Request, res: Response, next: NextFunction, id: string) => {
        try {
            const trackExists = await this._service.findOneTrackById(id)

            return (trackExists) ? next() : this._httpResponse.NotFound(res, `No hay resultados para el id '${ id }'`)
        } catch (error) {
            console.log(red(`Error en TrackMiddleware:idParamValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public trackValidator = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const valid = new TrackDTO()

            valid.album = req.body.album
            valid.artists = req.body.artists
            valid.duration = req.body.duration
            valid.isCover = req.body.isCover
            valid.name = req.body.name

            validate(valid).then((error) => {
                return error.length ? this._httpResponse.PreconditionFailed(res, error) : next()
            })
        } catch (error) {
            console.log(red(`Error in MeetingMinutesMiddleware:trackValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
} 