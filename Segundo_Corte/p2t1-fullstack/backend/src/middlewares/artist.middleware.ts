import { validate } from "class-validator"
import { red } from "colors"
import { NextFunction, Request, Response } from "express"
import { ArtistDTO } from "../dtos"
import { ArtistService } from "../services"
import { HttpResponse } from "../shared/response/http.response"


export class ArtistMiddleware {
    private _service = new ArtistService()
    private _httpResponse = new HttpResponse()

    public idParamValidator = async (req: Request, res: Response, next: NextFunction, id: string) => {
        try {
            const artistExists = await this._service.findOneArtistById(id)

            return (artistExists) ? next() : this._httpResponse.NotFound(res, `No hay resultados para el id '${ id }'`)
        } catch (error) {
            console.log(red(`Error en ArtistMiddleware:idParamValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public artistValidator = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const valid = new ArtistDTO()

            valid.artistName = req.body.artistName
            valid.artistNickname = req.body.artistNickname
            valid.artistNationality = req.body.artistNationality

            validate(valid).then((error) => {
                return error.length ? this._httpResponse.PreconditionFailed(res, error) : next()
            })
        } catch (error) {
            console.log(red(`Error in MeetingMinutesMiddleware:artistValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
} 