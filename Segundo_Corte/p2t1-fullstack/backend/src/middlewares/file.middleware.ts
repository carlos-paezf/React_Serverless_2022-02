import { validate } from "class-validator"
import { red } from "colors"
import { NextFunction, Request, Response } from "express"
import { FileDTO } from "../dtos"
import { FileService } from "../services"
import { HttpResponse } from "../shared/response/http.response"


export class FileMiddleware {
    private _service = new FileService()
    private _httpResponse = new HttpResponse()

    public idParamValidator = async (req: Request, res: Response, next: NextFunction, id: string) => {
        try {
            const storageExists = await this._service.findOneFileById(id)

            return (storageExists) ? next() : this._httpResponse.NotFound(res, `No hay resultados para el id '${ id }'`)
        } catch (error) {
            console.log(red(`Error en FileMiddleware:idParamValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }

    public fileValidator = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const valid = new FileDTO()

            valid.mimeType = req.body.mimeType
            valid.base64 = req.body.base64
            valid.filename = req.body.filename
            valid.trackId = req.body.trackId

            validate(valid).then((error) => {
                return error.length ? this._httpResponse.PreconditionFailed(res, error) : next()
            })
        } catch (error) {
            console.log(red(`Error in MeetingMinutesMiddleware:storageValidator: `), error)
            return this._httpResponse.InternalServerError(res, error)
        }
    }
} 